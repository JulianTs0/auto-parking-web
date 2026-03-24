import { Link } from 'react-router-dom';
import PasswordInput from '../../atoms/password-input/password-input';
import MainButton from '../../atoms/main-button/main-button';
import style from './style.module.css';
import MediumTitle from '../../atoms/medium-tittle/medium-tittle';
import SimpleInput from '../../atoms/simple-input/simple-input';
import Icon from '../../atoms/icon/icon';
import { CONSTANTS } from '../../../../core/const/app-values';

type Props = {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    isSubmitting: boolean;
    showPassword: boolean;
    onClickPassword: () => void;
    iconName: string;
};

export default function RegisterForm({
    onSubmit,
    isSubmitting,
    showPassword,
    onClickPassword,
    iconName,
}: Props) {
    return (
        <form onSubmit={onSubmit} className={style.container}>
            <Icon icon={iconName} />
            <MediumTitle text="Registrarse como dueño" />
            <div className={style.inputDelimiter}>
                <SimpleInput
                    id="fullName"
                    placeholder="Nombre completo"
                    required
                    type="text"
                />
            </div>
            <div className={style.inputDelimiter}>
                <SimpleInput
                    id="email"
                    placeholder="Email"
                    required
                    type="text"
                />
            </div>
            <div className={style.inputDelimiter}>
                <SimpleInput
                    id="phoneNumber"
                    placeholder="Numero de telefono (Opcional)"
                    type="text"
                />
            </div>
            <div className={style.inputDelimiter}>
                <PasswordInput
                    id="password"
                    placeholder="Contraseña"
                    required
                    showPassword={showPassword}
                    onClickPassword={onClickPassword}
                />
            </div>
            <div className={style.inputDelimiter}>
                <MainButton
                    onClick={() => { }}
                    text={
                        isSubmitting
                            ? CONSTANTS.LODING_BUTTON
                            : 'Registrarse'
                    }
                    type="submit"
                    enabled={!isSubmitting}
                />
            </div>
            <div className={style.loginText}>
                <p>¿Ya estás registrado?</p>
                <Link to="/login" aria-label="Iniciar session">
                    Iniciar sesión
                </Link>
            </div>
        </form>
    );
}
