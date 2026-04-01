import { Link } from 'react-router-dom';
import MainButton from '../../atoms/main-button/main-button';
import style from './style.module.css';
import MediumTitle from '../../atoms/medium-tittle/medium-tittle';
import SmallTitle from '../../atoms/small-tittle/small-tittle';
import SimpleInput from '../../atoms/simple-input/simple-input';
import Icon from '../../atoms/icon/icon';
import ProgressBar from '../../molecules/progress-bar/progress-bar';

type Props = {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    isSubmitting: boolean;
    iconName: string;
    cooldown: number;
};

export default function RecoverForm({
    onSubmit,
    isSubmitting,
    iconName,
    cooldown,
}: Props) {
    return (
        <form onSubmit={onSubmit} className={style.container}>
            {cooldown > 0 ? (
                <ProgressBar maxTime={60} currentTime={cooldown} />
            ) : (
                <Icon icon={iconName} />
            )}
            <MediumTitle text="Recupera tu contraseña" />
            <div className={style.inputDelimiter}>
                <SmallTitle text="Introduce tu correo electronico" />
                <SimpleInput
                    id="email"
                    placeholder="Email"
                    required
                    type="text"
                />
            </div>
            <div className={style.inputDelimiter}>
                <MainButton
                    onClick={() => {}}
                    text={
                        cooldown > 0
                            ? `Reenviar en ${cooldown}s`
                            : isSubmitting
                              ? 'Cargando...'
                              : 'Enviar enlace de recuperación'
                    }
                    type="submit"
                    enabled={!isSubmitting && cooldown === 0}
                />
            </div>
            <div className={style.loginText}>
                <p>¿Te acordate de tu contraseña?</p>
                <Link to="/login" aria-label="Iniciar session">
                    Iniciar sesión
                </Link>
            </div>
        </form>
    );
}
