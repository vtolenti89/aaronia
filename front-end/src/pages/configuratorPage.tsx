import React, {useState, useEffect} from 'react';
import {DefaultProps, Specs} from '../interfaces';

const defaultSpecs : Specs = {
  version: '',
  options: '',
  software: ''  
}

const ConfiguratorPage : React.FC<DefaultProps> = () => {
  const [specs, setSpecs] = useState<Specs>(defaultSpecs)
  
  return (
    <div className="p-configurator">
      <h1>Konfigurator</h1>

    </div>
  );
}

export default ConfiguratorPage;