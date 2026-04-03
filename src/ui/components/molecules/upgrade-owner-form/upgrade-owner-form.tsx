import MainButton from '../../atoms/main-button/main-button';
import PasswordInput from '../../atoms/password-input/password-input';
import style from './style.module.css';
import Icon from '../../atoms/icon/icon';
import MediumTitle from '../../atoms/medium-tittle/medium-tittle';
import SimpleInput from '../../atoms/simple-input/simple-input';
import { Link } from 'react-router-dom';

type Props = {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    onClickPassword: () => void;
    showPassword: boolean;
    iconName: string;
};

export default function UpgradeOwnerForm({
    onSubmit,
    onClickPassword,
    showPassword,
    iconName,
}: Props) {
    return (
        <form onSubmit={onSubmit} className={style.container}>
            <Icon icon={iconName} />
            <MediumTitle text="Solicitar mejora" />
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
                    onClick={() => { }}
                    text="Solicitar mejora"
                    type="submit"
                    enabled={true}
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
