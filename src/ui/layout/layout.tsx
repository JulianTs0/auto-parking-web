import Header from '../components/organisms/header/header';
import style from './style.module.css';
import '../styles/index.css';
import type { User } from '../../domain';

type Props = {
    children: React.ReactNode;
    withHeader?: boolean;
    user?: User;
    onLogout?: () => void;
    showNavbar?: boolean;
    toggleNavbar?: () => void;
    isAdmin?: boolean;
};

export default function Layout({
    children,
    withHeader,
    user,
    onLogout,
    showNavbar,
    toggleNavbar,
    isAdmin,
}: Props) {
    return (
        <div
            className={`container ${withHeader && style.customContainer}`}
        >
            {withHeader && (
                <Header
                    user={user}
                    onLogout={onLogout}
                    showNavbar={showNavbar}
                    toggleNavbar={toggleNavbar}
                    isAdmin={isAdmin}
                />
            )}
            <main
                className={`delimiter ${withHeader && style.customContainer}`}
            >
                {children}
            </main>
        </div>
    );
}
