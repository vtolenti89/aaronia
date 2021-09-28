import React from 'react';
import './input.scss';
import { DefaultProps, Specs, UserForm, SpecSoft, Error } from '../../../interfaces';

interface InputProps {
    label: string;
    name: string;
    value: string | number;
    placeholder?: string;
    type?: string;
    disabled?: boolean;
    error?: Error;
    onChange: (name: string, value: any) => void;
}

const Input: React.FC<InputProps> = ({ label, name, value, error, type, placeholder, disabled, onChange}) => {
    return (
        <div className={`c-input`}>
            <label>
                <span>
                {label}
                </span>
            <input
                type={type || 'input'} 
                placeholder={placeholder}
                onChange={(e) => onChange(name, e.target.value)} 
                name={label}
                value={value}
                disabled={disabled}
                />
                </label>
                {error?.field ? <div className={'c-input__error'}>{error.description}</div> : null}
        </div>
    )
}

export default Input;