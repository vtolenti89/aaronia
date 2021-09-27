import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import logo from './logo.svg';
import Routes from './Routes';
import Header from './components/header/header';
import './app.scss';

const App: React.FC = () => {
    return (
        <div className="app">
            <Router>
                <Header />
                {/* <Menubar /> */}
                {/* <Banner BannerImg="https://wallpaperset.com/w/full/0/7/f/32861.jpg" AltImg="The 1975 BW banner" /> */}
                {/* <Footer /> */}
                <Routes />
            </Router>
        </div>
    );
};

export default App;