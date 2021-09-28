import React, {useState, useEffect} from 'react';
import Button from '../../../components/shared/button/button';
import {DefaultProps, Specs, StepDefaultProps} from '../../../interfaces';
import './step.scss';

interface StepFooterProps extends StepDefaultProps{
    previousLabel?: string;
    nextLabel?: string;
    nextDisabled?: boolean
} 

const StepFooter : React.FC<StepFooterProps> = ({previousLabel, nextLabel, onPreviousClick, onNextClick, nextDisabled}) => {
  return (
    <div className="c-stepfooter">
      {previousLabel && onPreviousClick &&
          <Button 
        label={previousLabel}
        onClick={onPreviousClick}
        />
    }
    {nextLabel && onNextClick &&
          <Button
        disabled={nextDisabled}
        label={nextLabel}
        onClick={onNextClick}
        />
    }
    </div>
  );
}

export default StepFooter;