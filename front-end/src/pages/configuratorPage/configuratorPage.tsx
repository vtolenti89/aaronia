import React, { useState, useEffect } from 'react';
import { DefaultProps, Specs } from '../../interfaces';
import Progress from './components/progress';
import StepOne from './components/stepOne';
import StepThree from './components/stepThree';
import StepTwo from './components/stepTwo';

import './configuratorPage.scss';

const defaultSpecs: Specs = {
  version: {
    image: '',
    name: ''
  },
  option: {id: 0, option: '', description: ''},
  software: []
}

const properties = ['version', 'option', 'software', 'summary', 'complete'].map((prop, index) => {
  return {
    id: index + 1,
    label: prop
  }
});

const ConfiguratorPage: React.FC<DefaultProps> = () => {
  const [specs, setSpecs] = useState<Specs>(defaultSpecs);
  const [step, setStep] = useState<number>(1);

  const handleSpecChange = (name: string, value: any) => {
    setSpecs((specs) => {
      return {...specs, [name]: value}
    })
  }



  const getLabel = () => {
    if(step === 1) return 'Version';
    if(step === 2) return 'Option';
    return 'Software'
  }

  return (
    <div className="p-configurator container container__spacer">
      <Progress
      actualId={step}
      list={properties}
      />
      {step === 1 ?
        <StepOne 
        version={specs.version}
        onChangeVersion={(version)=> handleSpecChange('version', version)}
        onNextClick={()=>setStep(2)} />
        : (step == 2 ?
          <StepTwo 
          option={specs.option}
          onChangeOption ={(option) => handleSpecChange('option', option)}
          onPreviousClick={()=>setStep(1)}
          onNextClick={()=>setStep(3)} /> :
          <StepThree
          software={specs.software}
          onChangeSoftware={(software) => handleSpecChange('software', software)}
          onPreviousClick={() => setStep(2)}
          onNextClick={()=>setStep(4)}
          />)
      }
    </div>
  );
}

export default ConfiguratorPage;