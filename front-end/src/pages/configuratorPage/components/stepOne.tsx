import React, { useState, useEffect } from 'react';
import { DefaultProps, Specs, SpecVersion, StepDefaultProps } from '../../../interfaces';
import './step.scss';
import StepFooter from './stepFooter';

interface StepOneProps extends StepDefaultProps {
  version: SpecVersion;
  onChangeVersion: (version: SpecVersion) => void;
}

const versions = [
  {
    image: 'V6_RSA250X_real.png',
    label: 'SPECTRAN V6 - RSA 250X',
    name: '250'
  },
  {
    image: 'V6_RSA500X_real.png',
    label: 'SPECTRAN V6 - RSA 500X',
    name: '500'
  },
  {
    image: 'V6_RSA2000X_real.png',
    label: 'SPECTRAN V6 - RSA 2000X',
    name: '2000'
  }
]


const StepOne: React.FC<StepOneProps> = ({version, onNextClick, onChangeVersion}) => {

  return (
    <div className="c-step c-step-one">
      <h1>Version</h1>
      <div className={'c-step-one__selector'}>
        {versions.map((v, index) => {
          return <div key={index}  onClick={(e)=>onChangeVersion(v)} className={'c-step-one__selector__inner'}>
            <img src={'/assets/images/' + v.image} alt="version_image" />
            <label>{v.label}
              <input  type="radio" name={v.name} 
                      checked={v.name === version.name }
                      readOnly={true}
                      />
            </label>
          </div>
        })}
      </div>
      <StepFooter
        nextLabel={'Next'}
        nextDisabled={version.name == ""}
        onNextClick={onNextClick}
      />
    </div>
  );
}

export default StepOne;