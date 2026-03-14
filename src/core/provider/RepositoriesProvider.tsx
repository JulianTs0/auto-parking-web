import type { ReactNode } from 'react';
import { createContext, useContext, useMemo } from 'react';
import {
    AuthRepository,
    SessionRepository,
    UserRepository,
} from '../../infrastructure';
import { CLientErrors } from '../../domain';

interface RepositoriesProviderProps {
    children: ReactNode;
}

interface RepositoriesContextType {
    authRepository: AuthRepository;
    sessionRepository: SessionRepository;
    userRepository: UserRepository;
}

const RepositoriesContext =
    createContext<RepositoriesContextType | null>(null);

export const RepositoriesProvider = ({
    children,
}: RepositoriesProviderProps) => {
    const repositories = useMemo(
        () => ({
            authRepository: new AuthRepository(),
            sessionRepository: new SessionRepository(),
            userRepository: new UserRepository(),
        }),
        [],
    );

    return (
        <RepositoriesContext.Provider value={repositories}>
            {children}
        </RepositoriesContext.Provider>
    );
};

export const useRepositories = () => {
    const context = useContext(RepositoriesContext);

    if (!context) throw new Error(CLientErrors.CLIENT_ERROR);

    return context;
};
