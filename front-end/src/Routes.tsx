import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ConfiguratorPage from './pages/configuratorPage';
import HomePage from './pages/homePage';

const Routes: React.FC = () => (
    <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/configurator" component={ConfiguratorPage} />
    </Switch>
);

export default Routes;