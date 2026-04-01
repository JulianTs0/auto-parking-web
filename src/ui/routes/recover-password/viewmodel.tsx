import { useRepositories } from '../../../core';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import {
    ClientErrors,
    ErrorHandler,
    Regex,
    type RecoverPasswordReq,
} from '../../../domain';
import { useNavigate } from 'react-router-dom';
import useSession from '../../hooks/useSession';
import { CONSTANTS } from '../../../core/const/app-values';

export function ViewModel() {
    const navigate = useNavigate();

    const icon: string = 'default';

    const { logged } = useSession();
    const { authRepository } = useRepositories();

    const [error, setError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [cooldown, setCooldown] = useState(0);

    useEffect(() => {
        if (error != null) {
            toast.error(error);
            setError(null);
        }
    }, [error]);

    useEffect(() => {
        if (logged) {
            navigate('/profile');
        }
    }, [logged]);

    useEffect(() => {
        if (cooldown > 0) {
            const timer = setInterval(() => {
                setCooldown((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [cooldown]);

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        toast.dismiss();

        if (isSubmitting || cooldown > 0) return;

        const form = Object.fromEntries(
            new FormData(e.currentTarget),
        );

        const payload = {
            email: form.email?.toString().trim().toLowerCase() || '',
        };

        if (!Regex.EMAIL.test(payload.email)) {
            setIsSubmitting(false);
            return setError(ClientErrors.INVALID_EMAIL);
        }

        setIsSubmitting(true);

        try {
            await authRepository.recoverPassword({
                email: payload.email,
            } as RecoverPasswordReq);
            toast.success(CONSTANTS.EMAIL_SEND);
            navigate('/login');
        } catch (error: any) {
            if (error.response?.status === 429) {
                const retryAfter = parseInt(
                    error.response.headers['retry-after'],
                    10,
                );
                setCooldown(retryAfter || 60);
                toast.error(CONSTANTS.WAITH_RESEND);
            } else {
                toast.error(ErrorHandler.resolveError(error));
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return {
        onSubmit,
        isSubmitting,
        icon,
        cooldown,
    };
}
