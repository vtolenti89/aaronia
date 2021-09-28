import React, { useState, useEffect } from 'react';
import { DefaultProps, Specs, StepDefaultProps, SpecOption } from '../../../interfaces';
import StepFooter from './stepFooter';

import './step.scss';

interface StepTwoProps extends StepDefaultProps {
  option: SpecOption;
  onChangeOption: (option: SpecOption) => void;
}

const options = [
  {
    option: 'Option 0002',
    description: 'OCXO Timebase SPECTRAN V6'
  },
  {
    option: 'Option 0020',
    description:
      'Interner Pre-Amp SPECTRAN V6'
  }, {
    option: 'Option 0065',
    description: 'Erweiterter Temperaturbereich -40°C to +75°C'
  }, {
    option: 'Option 0120',
    description: '120MHz RTBW für SPECTRAN V6'
  }, {
    option: 'Option 1245',
    description: '245MHz Tx Erweiterung, Erweitert die Tx Datenrate von 120MHz auf 245MHz (Signalgenerator)'
  }, {
    option: 'Option 0401',
    description: 'Internes GPS für SPECTRAN V6'
  }, {
    option: 'Option 6080',
    description: 'Frequenz-Erweiterung bis 8 GHz für WiFi 6'
  }
].map((opt, index) => {
  return {
    ...opt,
    id: index + 1,
  }
});

const StepTwo: React.FC<StepTwoProps> = ({ option, onChangeOption, onPreviousClick, onNextClick }) => {

  return (
    <div className="c-step c-step-two">
      <h1>Options</h1>
      <div className={'c-step-two__selector'}>
        {options.map((o, index) => {
          return <div key={index} className={'c-step-two__selector__inner'}>
            <label>
              <div className="c-step-two__description">
              <p>
                {o.option}
              </p>
              <p>
                {o.description}
              </p>
              </div>
              <input type="radio" name={o.option}
                checked={o.option === option.option}
                onClick={(e) => onChangeOption(o)}
              />
            </label>
          </div>
        })}
      </div>
      <StepFooter
        previousLabel={'Previous'}
        nextLabel={'Next'}
        nextDisabled={option.option == ""}
        onPreviousClick={onPreviousClick}
        onNextClick={onNextClick}
      />

    </div>
  );
}

export default StepTwo;