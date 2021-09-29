import React, { useState, useEffect } from 'react';
import { DefaultProps, Specs } from '../../interfaces';
import Progress from './components/progress';
import StepOne from './components/stepOne';
import StepThree from './components/stepThree';
import StepTwo from './components/stepTwo';
import Summary from './components/summary';

import './configuratorPage.scss';

const defaultSpecs: Specs = {
  version: {
    image: '',
    name: ''
  },
  option: {id: 0, option: '', description: ''},
  software: []
}

// const defaultSpecs: Specs = {
//   version: {
//     image: 'V6_RSA250X_real.png',
//     label: 'SPECTRAN V6 - RSA 250X',
//     name: '250'
//   },
//   option: {
//     id: 0,
//     option: 'Option 1245',
//   description: '245MHz Tx Erweiterung, Erweitert die Tx Datenrate von 120MHz auf 245MHz (Signalgenerator)'},
//   software: [
//     {
//       id: 1,
//     name: 'Signal Strength Locator',
//     description: 'Signal Strength Locator',
//     },
//     {
//       id: 2,
//     name: 'IQ WiFi Interaction Mapper', 
//     description: 'IQ WiFi Interaction Mapper',
//     },
//     {
//       id: 3,
//     name: 'RF Drive Test',
//     description: 'RF Drive Test',
//     },
//     {
//       id: 4,
//     name: 'IQ WiFi Drone Detector',
//     description: 'IQ WiFi Drone Detector',
//     }
//   ]
// }

const properties = ['version', 'option', 'software', 'summary', 'complete'].map((prop, index) => {
  return {
    id: index + 1,
    label: prop
  }
});

const ConfiguratorPage: React.FC<DefaultProps> = ({history}) => {
  const [specs, setSpecs] = useState<Specs>(defaultSpecs);
  const [step, setStep] = useState<number>(1);
  const [showSummary, setShowSummary] = useState<boolean>(false)

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
      
      <Summary show={showSummary} history={history} specs={specs} onClose={()=>setShowSummary(false)}/> 
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
          onNextClick={()=>setShowSummary(true)}
          />)
      }
    </div>
  );
}

export default ConfiguratorPage;