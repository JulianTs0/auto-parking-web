import { Link } from 'react-router-dom';
import MainButton from '../../atoms/main-button/main-button';
import PasswordInput from '../../atoms/password-input/password-input';
import style from './style.module.css';
import Icon from '../../atoms/icon/icon';
import MediumTitle from '../../atoms/medium-tittle/medium-tittle';
import SimpleInput from '../../atoms/simple-input/simple-input';

type Props = {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    onClickPassword: () => void;
    showPassword: boolean;
    iconName: string;
};

export default function LoginForm({
    onSubmit,
    onClickPassword,
    showPassword,
    iconName,
}: Props) {
    return (
        <form onSubmit={onSubmit} className={style.container}>
            <Icon icon={iconName} />
            <MediumTitle text="Iniciar sesión" />
            <div className={style.inputDelimiter}>
                <SimpleInput
                    id="email"
                    placeholder="Email"
                    required
                    type="text"
                />
            </div>
            <div className={style.inputDelimiter}>
                <PasswordInput
                    id="password"
                    placeholder="Contraseña"
                    required
                    onClickPassword={onClickPassword}
                    showPassword={showPassword}
                />
            </div>
            <div className={style.inputDelimiter}>
                <MainButton
                    onClick={() => {}}
                    text="Iniciar sesión"
                    type="submit"
                    enabled={true}
                />
            </div>
            <Link
                to="/password-request"
                aria-label="Recuperar contraseña"
            >
                ¿Has olvidado tu contraseña?
            </Link>
            <div className={style.registerText}>
                <p>¿Primera vez?</p>
                <Link to="/register" aria-label="Crear una cuenta">
                    Regístrate
                </Link>
            </div>
        </form>
    );
}
