import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useRepositories } from '../../core';
import type {
    GetSessionRes,
    Role,
    Session,
    AuthReq,
    AuthRes,
} from '../../domain';

const PUBLIC_ROUTES = [
    '/login',
    '/register',
    '/password-request',
    '/upgrade-owner',
];

export default function useSession() {
    const navigate = useNavigate();
    const location = useLocation();
    const { sessionRepository, authRepository } = useRepositories();

    const [logged, setLogged] = useState<boolean | null>(null);
    const [userId, setUserId] = useState<string | null>(null);
    const [session, setSession] = useState<Session | null>(null);
    const [roles, setRoles] = useState<Role[]>([]);

    useEffect(() => {
        checkSession();
    }, [sessionRepository, authRepository]);

    useEffect(() => {
        if (logged == null) return;

        const isPublicRoute =
            logged == false ||
            PUBLIC_ROUTES.includes(location.pathname) ||
            location.pathname.startsWith('/edit-password/');

        const hasNoSession: boolean = !session;

        if (hasNoSession && !isPublicRoute) {
            navigate('/login', { replace: true });
        }
    }, [logged, session, location.pathname, navigate]);

    const checkSession = async () => {
        let aux: boolean | null;

        try {
            const sessionResponse: GetSessionRes | null =
                await sessionRepository.getSession();
            if (sessionResponse == null) {
                aux = false;
                return;
            }

            const authRequest: AuthReq = {
                authorization:
                    sessionResponse.session.getAccessToken(),
            };

            const authResponse: AuthRes | null =
                await authRepository.auth(authRequest);
            if (authResponse == null) {
                aux = false;
                return;
            }

            if (authResponse) {
                setUserId(authResponse.id);
                setSession(sessionResponse.session);
                setRoles(authResponse.roles);
            }

            aux = true;
        } catch {
        } finally {
            setLogged(aux);
        }
    };

    return {
        logged,
        userId,
        session,
        roles,
    };
}
