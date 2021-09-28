import React, {useState, useEffect} from 'react';
import Button from '../../../components/shared/button/button';
import {DefaultProps, Specs, Step} from '../../../interfaces';
import './step.scss';

interface StepFooterProps extends Step{
    previousLabel?: string;
    nextLabel?: string;
    nextDisabled?: boolean
    onPreviousClick?: () => void;
    onNextClick?: () => void;
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