import React, { useState, useEffect } from 'react';
import { DefaultProps, Specs, UserForm, SpecSoft } from '../../../interfaces';
import SubmitForm from './submitForm';
import './summary.scss';

interface SummaryProps {
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

const Summary: React.FC<SummaryProps> = ({ specs }) => {
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


  const handleSubmit = () => {
    if (!fieldsAreValid) return;
  }


  return (
    <div className="c-summary">
      <h1>Software</h1>
      <div className={'c-step-three__selector'}>
      <SubmitForm
        specs={specs}
      />
      </div>

    </div>
  );
}

export default Summary;