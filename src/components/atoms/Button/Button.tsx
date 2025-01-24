import cx from 'classnames';
import styles from './button.module.scss';
import { ReactEventHandler } from 'react';

interface ButtonProps {
    label: string;
    type?: 'primary' | 'secondary';
    className?: string,
    disabled?: boolean,
    onClick?: ReactEventHandler
}

const Button = ({
    label,
    type = 'primary',
    className,
    disabled = false,
    onClick
}: ButtonProps) => {
    return (
        <button className={cx(styles.button, 
            [styles['button'],
            styles['button--' + type]], 
            className)}
            disabled={disabled}
            onClick={onClick}>
            {label}
        </button>
    );
}

export default Button;