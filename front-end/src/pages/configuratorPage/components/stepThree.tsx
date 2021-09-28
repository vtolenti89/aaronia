import React, { useState, useEffect } from 'react';
import { DefaultProps, Specs, StepDefaultProps, SpecSoft } from '../../../interfaces';
import StepFooter from './stepFooter';
import './step.scss';

interface StepThreeProps extends StepDefaultProps {
  software: Array<SpecSoft>
  onChangeSoftware: (software: Array<SpecSoft>) => void;
}

const softwareList = [
  'Signal Strength Locator', 
  'IQ WiFi Interaction Mapper', 
  'RF Drive Test', 
  'IQ WiFi Drone Detector', 
  'IQ Pulse Inspector', 
  'RF SP4T Switch', 
  'Channel Power Measurement', 
  'Tektronix RSA Spectrum Analyzer', 
  'V6 Sweep Generator', 
  'NRQ6 Power Sensor', 
  'NRP-Z11 Power Sensor', 
  'Intermodulation Analyzer', 
  'Harmonics Analyzer', 
  'Short Burst Suppression Filter', 
  'Frequency Range Follower', 
  'HTTP Client', 
  'HTTP Server', 
  'GPS', 
  'Multi Spectrum Zoom', 
  'Multi Stream Logger', 
  'Stream Multiplexer', 
  'Remote Config', 
  'Spectrum Reference', 
  'Spectrum Stitcher'
].map((software, index) => {
  return {
    id: index + 1,
    name: software.replace(/ /g,''),
    description: software
  }
})

const StepThree: React.FC<StepThreeProps> = ({software, onChangeSoftware, onPreviousClick, onNextClick}) => {
  console.log(software)

  const isChecked = (name: string) => {
    return software.some((soft) => soft.name === name);
  }

  const handleOnChangeSoftware = (soft: SpecSoft, checked: boolean) => {
    let newSoftware = [...software];
    let index = software.findIndex((s) => s.name === soft.name);
    
    if(checked) {
      if(index < 0) {
        newSoftware.push(soft);
      }
    } else {
      if(index > -1) {
        // Element is present and must be removed
        newSoftware.splice(index, 1);
      } 
    }
    onChangeSoftware(newSoftware);
  }

  return (
    <div className="c-step c-step-three">
      <h1>Software</h1>
      <div className={'c-step-three__selector'}>
        {softwareList.map((soft, index) => {
          return <div key={index}  className={'c-step-three__selector__inner'}>
            <label 
            >{soft.description}
              <input  type="checkbox" name={soft.name} 
                      checked={isChecked(soft.name)}
                      onChange={(e)=>handleOnChangeSoftware(soft, e.target.checked)}
                      />
            </label>
          </div>
        })}
      </div>
      <StepFooter
        previousLabel={'Previous'}
        nextLabel={'Next'}
        nextDisabled={!software.length}
        onPreviousClick={onPreviousClick}
        onNextClick={onNextClick}
      />

    </div>
  );
}

export default StepThree;