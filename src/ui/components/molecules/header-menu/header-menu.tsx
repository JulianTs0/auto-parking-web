import { Link } from 'react-router-dom';
import Avatar from '../../atoms/avatar/avatar';
import style from './style.module.css';
import Icon from '../../atoms/icon/icon';
import type { User } from '../../../../domain';

type Props = {
    user?: User | null;
    profileLink: string;
};

export default function HeaderMenu({ user, profileLink }: Props) {
    return (
        <div className={style.container}>
            <Link to={profileLink}>
                {true ? <Avatar /> : <Icon icon="profile" />}
            </Link>
        </div>
    );
}
