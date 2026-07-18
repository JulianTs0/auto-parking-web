import { type User } from '../../../../domain';
import Icon from '../../atoms/icon/icon';
import NavBar from '../../atoms/navbar/navbar';
import HeaderMenu from '../../molecules/header-menu/header-menu';
import style from './style.module.css';

type Props = {
    user?: User | null;
    onLogout: () => void;
    showNavbar: boolean;
    toggleNavbar: () => void;
    isAdmin: boolean;
    profileLink: string;
};

export default function Header({
    user,
    onLogout,
    showNavbar,
    toggleNavbar,
    isAdmin,
    profileLink,
}: Props) {
    return (
        <header className={`${style.container}`}>
            <div className={`${style.delimiter} delimiter`}>
                <div className={style.content}>
                    <div
                        className={style.burger}
                        onClick={toggleNavbar}
                    >
                        <Icon icon="navvar" />
                    </div>
                    <div className={style.routesContainer}>
                        <HeaderMenu
                            user={user}
                            profileLink={profileLink}
                        />
                    </div>
                </div>
            </div>

            <NavBar
                onLogout={onLogout}
                show={showNavbar}
                onClose={toggleNavbar}
                user={user}
                isAdmin={isAdmin}
            />
        </header>
    );
}
