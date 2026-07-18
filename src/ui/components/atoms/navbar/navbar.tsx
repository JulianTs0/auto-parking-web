import { Link, useLocation } from 'react-router-dom';
import { type User } from '../../../../domain';
import style from './style.module.css';
import Icon from '../icon/icon';

type Props = {
    show: boolean;
    onClose: () => void;
    onLogout: () => void;
    user: User;
    isAdmin: boolean;
};

export default function NavBar({
    show,
    onClose,
    onLogout,
    user,
    isAdmin,
}: Props) {
    const location = useLocation();

    return (
        <>
            <div
                className={`${style.backdrop} ${show ? style.active : ''}`}
                onClick={onClose}
            ></div>
            <nav
                className={`${style.navbar} ${show ? style.active : ''}`}
            >
                <div className={style.header}>
                    <div className={style.close} onClick={onClose}>
                        <Icon
                            icon="close"
                            className={style.closeImg}
                        />
                    </div>
                </div>
                <ul className={style.list}>
                    <li
                        className={`${style.item} ${location.pathname === '/home' ? style.activeItem : ''}`}
                    >
                        <Link to="/" onClick={onClose}>
                            Menu
                        </Link>
                    </li>
                    <li
                        className={`${style.item} ${location.pathname.startsWith('/user') ? style.activeItem : ''}`}
                    >
                        <Link
                            to={`/user/${user?.id}`}
                            onClick={onClose}
                        >
                            Tu Perfil
                        </Link>
                    </li>
                    {isAdmin && (
                        <li
                            className={`${style.item} ${location.pathname.startsWith('/admin') ? style.activeItem : ''}`}
                        >
                            <Link to="/admin" onClick={onClose}>
                                Panel de Administración
                            </Link>
                        </li>
                    )}
                </ul>
                <div
                    className={style.logoutContainer}
                    onClick={onLogout}
                >
                    <Icon icon="logout" className={style.logout} />
                    <span className={style.logoutText}>
                        Cerrar sesión
                    </span>
                </div>
            </nav>
        </>
    );
}
