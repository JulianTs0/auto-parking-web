import noImage from '../../../assets/images/no-image.png';
import style from './style.module.css';

type Props = {
    onClick?: () => void;
};

export default function Avatar({ onClick }: Props) {
    return (
        <div className={style.container} onClick={onClick}>
            <img
                src={noImage}
                alt="profile image"
                className={style.profileImage}
            />
        </div>
    );
}
