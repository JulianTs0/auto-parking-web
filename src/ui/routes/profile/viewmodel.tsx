import { useNavigate, useParams } from 'react-router-dom';
import useSession from '../../hooks/useSession';
import { useRepositories } from '../../../core';
import { useEffect, useMemo, useState } from 'react';
import {
    Role,
    User,
    type GetByIdReq,
    ErrorHandler,
} from '../../../domain';
import toast from 'react-hot-toast';

export default function ViewModel() {
    const navigate = useNavigate();

    const { id } = useParams();
    const { userId, session } = useSession();
    const { userRepository, sessionRepository } = useRepositories();

    const [user, setUser] = useState<User | null>(null);

    const [showNavbar, setShowNavbar] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            if (session != null && userId != null) {
                await fetchUser();
            }
        };
        fetchData().then();
    }, [session]);

    const isAdmin = useMemo(() => {
        return user?.roles.has(Role.ADMIN);
    }, [user]);

    // TODO

    const profileLink = useMemo(() => {
        user?.id ? `/profile/${user.id}` : '/profile';
    }, [user]);

    const fetchUser = async () => {
        try {
            const userResponse = await userRepository.getById({
                session: session,
                id: id !== null ? id : userId,
            } as GetByIdReq);

            const userEntity = User.fromObject(userResponse);

            if (userEntity) {
                setUser(userEntity);
            }
        } catch (error) {
            toast.error(ErrorHandler.resolveError(error));
        }
    };

    const toggleNavbar = () => {
        setShowNavbar((prev) => !prev);
    };

    const onLogout = async () => {
        try {
            await sessionRepository.deleteSession();

            toast.success('Sesión cerrada');
            navigate('/login', { replace: true });
        } catch (e) {
            toast.error('No se pudo cerrar sesión');
        }
    };

    return {
        user,
        onLogout,
        isAdmin,
        showNavbar,
        toggleNavbar,
    };
}
