import { Link } from 'react-router-dom';
import MainButton from '../../atoms/main-button/main-button';
import style from './style.module.css';
import MediumTitle from '../../atoms/medium-tittle/medium-tittle';
import SmallTitle from '../../atoms/small-tittle/small-tittle';
import SimpleInput from '../../atoms/simple-input/simple-input';
import Icon from '../../atoms/icon/icon';

type Props = {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    isSubmitting: boolean;
    iconName: string;
};

export default function RecoverForm({
    onSubmit,
    isSubmitting,
    iconName,
}: Props) {
    return (
        <form onSubmit={onSubmit} className={style.container}>
            <Icon icon={iconName} />
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
                    onClick={() => { }}
                    text={
                        isSubmitting
                            ? 'Cargando...'
                            : 'Enviar enlace de recuperacion'
                    }
                    type="submit"
                    enabled={!isSubmitting}
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
