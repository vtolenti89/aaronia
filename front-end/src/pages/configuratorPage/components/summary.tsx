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

  return (
    <div className="c-summary">
      <h1>Summary</h1>
      <div className={'c-summary__upper'}>
        <img src={'/assets/images/' + specs.version.image} alt="specs_image" />
        <div className={'c-summary__description'}>
          <h1>{specs.version.label}</h1>
          <hr />
          <h3>Options</h3>
          <p><strong>Option:</strong>{specs.option.option}</p>
          <p><strong>Description:</strong>{specs.option.description}</p>
        </div>
      </div>
      <div className={'c-summary__lower'}>
          <h3>Software</h3>
          <ul>
          {specs.software.map((soft, index) => {
            return <li key={index}>{soft.description}</li>
          })}
          </ul>
          <hr />
      </div>
          
      <SubmitForm
        specs={specs}
      />

    </div>
  );
}

export default Summary;