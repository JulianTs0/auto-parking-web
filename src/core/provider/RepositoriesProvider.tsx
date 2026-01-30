import type { ReactNode } from "react";
import { createContext, useContext, useMemo } from "react";
import { } from "../../infrastructure";

interface RepositoriesProviderProps {
    children: ReactNode;
}

interface RepositoriesContextType {
    // repo: Repo
}

// dependecy context
const RepositoriesContext = createContext<RepositoriesContextType | null>(null);

export const RepositoriesProvider = (
    { children }: RepositoriesProviderProps
) => {

    const repositories = useMemo(() => ({
        // repo: new Repo()
    }), []);

    // dependecy injection
    return (
        <RepositoriesContext.Provider value={repositories}>
            {children}
        </RepositoriesContext.Provider>
    );

};

export const useRepositories = () => {

    const context = useContext(RepositoriesContext);

    if (!context) throw new Error("context error");

    return context;
};
