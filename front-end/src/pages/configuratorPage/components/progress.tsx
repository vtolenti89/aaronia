import React, {useState, useEffect} from 'react';
import Button from '../../../components/shared/button/button';
import {DefaultProps, Specs, Step, ProgressStep} from '../../../interfaces';
import './progress.scss';

interface ProgressProps {
  actualId: number;
  list: Array<ProgressStep>; 
} 

const Progress : React.FC<ProgressProps> = ({actualId, list}) => {
  return (
    <div className="c-progress">
      <div className="c-progress__inner">

      {list.map((step, index) => {
        return <div className={`c-progress__step ${actualId >= step.id ? 'is-active' : ''}`}>

          <span>{step.label.toUpperCase()}</span>
        </div>
      })}
      </div>
    </div>
  );
}

export default Progress;