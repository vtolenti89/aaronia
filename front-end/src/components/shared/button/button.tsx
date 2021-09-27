import React from 'react';
import './button.scss';

interface ButtonProps {
    label: string;
    type?: string;
    onClick: (e:any) => void;
}

const Button: React.FC<ButtonProps> = ({ label, type, onClick }) => {
    return (
        <div className={`c-button`}>
            <input
                type={type || 'button'} 
                onClick={onClick} 
                name={label}
                value={label}
                />
        </div>
    )
}

export default Button;