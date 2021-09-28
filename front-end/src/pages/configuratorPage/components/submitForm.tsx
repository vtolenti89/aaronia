import React, { useState, useEffect } from 'react';
import { DefaultProps, Specs, UserForm, SpecSoft } from '../../../interfaces';
import './submitForm.scss';

interface SubmitFormProps {
  specs: Specs
}

interface Error {
  field: string;
  type: string;
  description: string;
}

const defaultUserForm: UserForm = {
  name: '',
  email: '',
  comment: '',
  privacy: false,
}

const SubmitForm: React.FC<SubmitFormProps> = ({ specs }) => {
  const [form, setForm] = useState<UserForm>(defaultUserForm)
  const [errors, setErrors] = useState<Array<Error>>([]);

  const addError = (error: Error) => {
    setErrors((errors) => {
      return [...errors, error]
    })
  }

  const removeError = (error: Error) => {
    let index = errors.findIndex((err) => err.type === error.type)
    if (index > -1) {
      setErrors((errors) => {
        let newErrors = [...errors];
        newErrors.splice(index, 1);
        return newErrors;
      })
    }
  }

  const isNameValid = () => {
    if (!/^[-A-Z ]+$/i.test(form.name)) {
      addError({
        field: 'name',
        type: 'Invalid Name',
        description: 'Invalid Name'
      })
      return false;
    } else
      return true;
  }

  const isEmailValid = () => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email)) {
      addError({
        field: 'email',
        type: 'Invalid Email',
        description: 'Invalid Email'
      })
      return false;
    } else
      return true;
  }

  const isPrivacyValid = () => {
    return form.privacy;
  }

  const fieldsAreValid = () => {
    let isValid = true;
    // Resetting errors
    setErrors([])

    isValid = isNameValid();

    isValid = isEmailValid();

    isValid = isPrivacyValid();
  }


  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!fieldsAreValid) return;

  }


  return (
    <div className="c-submit">
      <form onSubmit={handleSubmit}>
        
      </form>
    </div>
  );
}

export default SubmitForm;