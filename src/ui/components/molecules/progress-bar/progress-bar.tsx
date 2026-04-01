import Icon from '../../atoms/icon/icon';
import style from './style.module.css';

type Props = {
    maxTime: number;
    currentTime: number;
    movingIcon?: string;
    startIcon?: string;
    endIcon?: string;
};

export default function ProgressBar({
    maxTime,
    currentTime,
    movingIcon = 'car',
    startIcon = 'house',
    endIcon = 'location',
}: Props) {
    const progress =
        maxTime > 0 ? ((maxTime - currentTime) / maxTime) * 100 : 0;
    const isActive = currentTime > 0;

    return (
        <div className={style.container}>
            {isActive && (
                <div className={style.wrapper}>
                    <div className={style.iconStart}>
                        <Icon icon={startIcon} />
                    </div>
                    <div className={style.track}>
                        <div
                            className={style.fill}
                            style={{ width: `${progress}%` }}
                        />
                        <div
                            className={style.movingIcon}
                            style={{ left: `${progress}%` }}
                        >
                            <Icon icon={movingIcon} />
                        </div>
                    </div>
                    <div className={style.iconEnd}>
                        <Icon icon={endIcon} />
                    </div>
                </div>
            )}
        </div>
    );
}
