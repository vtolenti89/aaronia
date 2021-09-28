import React from 'react';
import './button.scss';

interface InputProps {
    label: string;
    name: string;
    placeholder?: string;
    disabled?: boolean;
    onChange: (name: string, value: any) => void;
}

const Input: React.FC<InputProps> = ({ label, name, placeholder, disabled}, onChange) => {
    return (
        <div className={`c-input`}>
            <label>
                {label}
            <input
                type={'input'} 
                placeholder={placeholder}
                onChange={(e) => onChange(name, e.target.value)} 
                name={label}
                value={label}
                disabled={disabled}
                />
                </label>
        </div>
    )
}

export default Input;