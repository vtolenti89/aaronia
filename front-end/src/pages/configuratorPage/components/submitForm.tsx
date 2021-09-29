import React, { useState, useEffect } from 'react';
import Button from '../../../components/shared/button/button';
import Input from '../../../components/shared/input/input';
import Axios from 'axios';
import { DefaultProps, Specs, UserForm, SpecSoft, Error } from '../../../interfaces';
import './submitForm.scss';

interface SubmitFormProps extends DefaultProps {
  specs: Specs
}

const defaultUserForm: UserForm = {
  name: '',
  email: '',
  comment: '',
  privacy: false,
}

// const defaultUserForm: UserForm = {
//   name: 'Victor',
//   email: 'votolentino@gmail.com',
//   comment: 'blah',
//   privacy: true,
// }

const SubmitForm: React.FC<SubmitFormProps> = ({ specs, history }) => {
  const [form, setForm] = useState<UserForm>(defaultUserForm)
  const [errors, setErrors] = useState<Array<Error>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

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
        type: 'nameInvalid',
        description: 'Invalid Name'
      })
      return false;
    } else
      return true;
  }

  const isEmailValid = () => {
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email)) {
      addError({
        field: 'email',
        type: 'emailInvalid',
        description: 'Invalid Email'
      })
      return false;
    } else
      return true;
  }

  const isPrivacyValid = () => {
    if (!form.privacy) {
      addError({
        field: 'privacy',
        type: 'privacyInvalid',
        description: 'Data privacy check button must be selected.'
      })
      return false;
    } else
      return true;
  }

  const fieldsAreValid = () => {
    let isValid = true;
    // Resetting errors
    console.log(1)
    setErrors([])

    isValid = isNameValid();

    isValid = isEmailValid();

    isValid = isPrivacyValid();

    return isValid;
  }

  const handleChangeForm = (name: string, value: any) => {
    setForm((form) => {
      return { ...form, [name]: value }
    })
  }

  const redirectHome = () => {
    setTimeout(()=> {
      history.push("/");
    }, 3000);
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!fieldsAreValid()) return;
    setLoading(true);
    console.log("...sending")
    Axios({
      method: 'POST',
      url: 'api/order.php',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        specs,
        form
      }
    })
    .then((response) => {
      console.log(response)
      setLoading(false);
      setSuccess(true);
      redirectHome();
    })
    .catch((error) => {
      console.log(error)
    })
  }

  const getError = (name: string) => {
    return errors.find((error) => error.field === name)
  }

console.log(errors)
  return (
    <div className="c-submit">
      <form onSubmit={handleSubmit}>
        <Input
          label={'Name'}
          name={'name'}
          value={form.name}
          error={getError('name')}
          onChange={handleChangeForm}
        />
        <Input
          label={'Email'}
          name={'email'}
          value={form.email}
          error={getError('email')}
          onChange={handleChangeForm}
        />
        <Input
          label={'Comment'}
          name={'comment'}
          value={form.comment}
          onChange={handleChangeForm}
        />
        <label>
          <span>Data Privacy</span>
          <input type="checkbox" name={'privacy'}
            checked={form.privacy}
            onChange={(e) => handleChangeForm('privacy', e.target.checked)}
          />
          {getError('privacy')?.field ? <div className={'c-input__error'}>{getError('privacy')?.description}</div> : null}
        </label>
        <Button 
          label={'Order'}
          onClick={handleSubmit}
          disabled={loading}
        />
        {loading && <div className="loader"></div>}
        {success && <h2>We received your order :-)</h2>}
      </form>
    </div>
  );
}

export default SubmitForm;