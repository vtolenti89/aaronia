import React, {useState, useEffect} from 'react';
import {DefaultProps, Specs, Step} from '../../../interfaces';
import './step.scss';

interface StepThreeProps extends Step {
  software: Array<string>
  onChangeSoftware: (software: Array<string>) => void;
  onPreviousClick: () => void;
  onNextClick: (software: Array<String>) => void;
} 

const StepThree : React.FC<StepThreeProps> = (onPreviousClick, onNextClick) => {

  return (
    <div className="c-step c-stepthree">
      <h1>Software</h1>


    </div>
  );
}

export default StepThree;