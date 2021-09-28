import React from 'react';
import './button.scss';

interface ButtonProps {
    label: string;
    type?: string;
    disabled?: boolean;
    onClick: (e:any) => void;
}

const Button: React.FC<ButtonProps> = ({ label, type, disabled, onClick }) => {
    return (
        <div className={`c-button`}>
            <input
                type={type || 'button'} 
                onClick={onClick} 
                name={label}
                value={label}
                disabled={disabled}
                />
        </div>
    )
}

export default Button;