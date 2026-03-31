import { useState } from 'react';
import style from './style.module.css';
import See from '../../../assets/icons/see.svg';
import Unsee from '../../../assets/icons/unsee.svg';

type Props = {
    id: string;
    placeholder: string;
    required?: boolean;
    label?: string;
    value?: string;
    showPassword: boolean;
    onClickPassword: () => void;
};

export default function PasswordInput({
    label,
    placeholder,
    id,
    value,
    required,
    showPassword,
    onClickPassword,
}: Props) {
    const [self, setSelf] = useState<string | undefined>(value || '');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelf(e.target.value);
    };

    return (
        <div className={style.container}>
            {label && <label htmlFor={id}>{label}</label>}
            <div className={style.inputWrapper}>
                <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder={placeholder}
                    name={id}
                    value={self}
                    onChange={handleChange}
                    required={required}
                    onWheel={(
                        e: React.WheelEvent<HTMLInputElement>,
                    ) => e.currentTarget.blur()}
                />
                <button
                    type="button"
                    className={style.toggleButton}
                    onClick={onClickPassword}
                >
                    {showPassword ? (
                        <img
                            src={See}
                            alt="Ocultar"
                            className={style.icon}
                        />
                    ) : (
                        <img
                            src={Unsee}
                            alt="Mostrar"
                            className={style.icon}
                        />
                    )}
                </button>
            </div>
        </div>
    );
}
