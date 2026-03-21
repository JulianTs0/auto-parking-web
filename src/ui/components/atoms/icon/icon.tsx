import { IconMapper } from '../../../../core/utils/icon-mapper';
import style from './style.module.css';

type Props = {
    icon: string;
    isBig?: boolean;
    onClick?: () => void;
    className?: string;
};

export default function Icon({
    icon,
    isBig = false,
    className = '',
    onClick,
}: Props) {
    const iconUrl = IconMapper.getIcon(icon);
    return (
        <div
            className={`
                ${style.container}
                ${isBig ? style.bigContainer : ''}
                ${onClick ? style.clickeable : ''}
                ${className}
                `}
            onClick={() => {
                onClick?.();
            }}
        >
            <img
                className={`${isBig ? style.bigIcon : style.icon}`}
                src={iconUrl}
                alt={icon}
            />
        </div>
    );
}
