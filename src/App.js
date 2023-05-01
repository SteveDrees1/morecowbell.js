import React from 'react';
import logo from './Components/Img/logo.png';
import './App.css';
import ReactPlayer from 'react-player';
import bell from './Components/Audio/cowbell.mp3';

function App() {

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <ReactPlayer
                    url={bell}
                    playing={true}
                    controls={true}
                    loop={true}
                />
            </header>
        </div>
    );
}

export default App;
