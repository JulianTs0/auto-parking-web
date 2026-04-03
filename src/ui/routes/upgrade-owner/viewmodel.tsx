import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useSession from '../../hooks/useSession';
import { useRepositories } from '../../../core';
import toast from 'react-hot-toast';
import {
    Regex,
    type LoginReq,
    ClientErrors,
    ErrorHandler,
    type UpgradeToOwnerReq,
} from '../../../domain';
import { CONSTANTS } from '../../../core/const/app-values';

export function ViewModel() {
    const navigate = useNavigate();

    const { logged } = useSession();
    const { authRepository } = useRepositories();

    const [showPassword, setShowPassword] = useState(false);

    const [error, setError] = useState<string | null>(null);

    const icon: string = 'default';

    useEffect(() => {
        if (error != null) {
            toast.error(error);
            setError(null);
        }
    }, [error]);

    useEffect(() => {
        if (logged) {
            navigate('/');
        }
    }, [logged]);

    const onClickPassword = () => {
        setShowPassword(!showPassword);
    };

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        toast.dismiss();

        const form = Object.fromEntries(
            new FormData(e.currentTarget),
        );

        const payload = {
            email: form.email?.toString().trim().toLowerCase() || '',
            password: form.password?.toString() || '',
        };

        if (!Regex.EMAIL.test(payload.email)) {
            return setError(ClientErrors.INVALID_EMAIL);
        }

        if (!Regex.PASSWORD.test(payload.password)) {
            return setError(ClientErrors.INVALID_PASSWORD);
        }

        const ownerUpgradePromise = async () => {
            await authRepository.login({
                email: payload.email!!,
                password: payload.password!!,
            } as LoginReq);

            await authRepository.requestOwnerUpgrade({
                email: payload.email!!,
            } as UpgradeToOwnerReq);
        };

        await toast.promise(ownerUpgradePromise(), {
            loading: CONSTANTS.LOADING_REGISTER,
            success: () => {
                navigate('/login');
                return CONSTANTS.SUCCESS_REGISTER;
            },
            error: (err) => ErrorHandler.resolveError(err),
        });
    };

    return {
        onSubmit,
        onClickPassword,
        showPassword,
        icon,
    };
}
