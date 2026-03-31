import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRepositories } from '../../../core';
import {
    ClientErrors,
    ErrorHandler,
    Regex,
    type RegisterReq,
} from '../../../domain';
import useSession from '../../hooks/useSession.tsx';
import toast from 'react-hot-toast';
import { CONSTANTS } from '../../../core/const/app-values.ts';

export function ViewModel() {
    const navigate = useNavigate();

    const { logged, userId } = useSession();
    const { authRepository } = useRepositories();

    const [error, setError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [showPassword, setShowPassword] = useState(false);

    const icon: string = 'default';

    useEffect(() => {
        if (error != null) {
            toast.error(error);
            setError(null);
        }
    }, [error]);

    useEffect(() => {
        if (logged) {
            navigate(`/user/${userId}`);
        }
    }, [logged]);

    const onClickPassword = () => setShowPassword((prev) => !prev);

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        toast.dismiss();

        if (isSubmitting) return;

        const form = Object.fromEntries(
            new FormData(e.currentTarget),
        );

        const payload = {
            fullName: form.fullName?.toString().trim() || '',
            email: form.email?.toString().trim().toLowerCase() || '',
            password: form.password?.toString() || '',
            phoneNumber: form.phoneNumber?.toString || '',
        };

        if (!Regex.FULLNAME.test(payload.fullName)) {
            return setError(ClientErrors.INVALID_NAME);
        }

        if (!Regex.EMAIL.test(payload.email)) {
            return setError(ClientErrors.INVALID_EMAIL);
        }

        if (!Regex.PASSWORD.test(payload.password)) {
            return setError(ClientErrors.INVALID_PASSWORD);
        }

        const registerPromise = async () => {
            setIsSubmitting(true);

            try {
                await authRepository.register({
                    fullName: payload.fullName,
                    email: payload.email,
                    password: payload.password,
                    phoneNumber: payload.phoneNumber,
                } as RegisterReq);
            } catch (error) {
                throw error;
            } finally {
                setIsSubmitting(false);
            }
        };

        await toast.promise(registerPromise(), {
            loading: CONSTANTS.LOADING_REGISTER,
            success: (data) => {
                navigate('/login');
                return CONSTANTS.SUCCESS_REGISTER;
            },
            error: (err) => ErrorHandler.resolveError(err),
        });
    };

    return {
        onSubmit,
        isSubmitting,
        showPassword,
        onClickPassword,
        icon,
    };
}
