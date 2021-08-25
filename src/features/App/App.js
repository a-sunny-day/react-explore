import React, { useEffect } from 'react';
import "../../assets/styles/index.css";

import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route,
    useRouteMatch,
    useParams
} from 'react-router-dom';

import './App.css';
import Home from '../Home/Home';
import About from "../About/About";
import Topics from '../Topics/Topics';
import Counter from '../Counter/Counter';
import KeepFocus from '../Explore/KeepFoucs';
import soundUrl from './ring.wav';

let speakerList = [];
const isSpeakerDeviceValid = () => true;

navigator.mediaDevices.enumerateDevices().then( (deviceInfos) => {
    return deviceInfos
        .filter(({ kind }) => {
            return kind === 'audiooutput';
        })
        .filter(({ deviceId, label }) => isSpeakerDeviceValid(deviceId, label))
        .map(({ deviceId, label }) => {
            // label:
            // "Default - 扬声器 (USB PnP Sound Device) (2b0d:0021)"
            //  => "扬声器 (USB PnP Sound Device)""
            if (deviceId === 'default') {
                return {
                    deviceId,
                    label: 'Same as system',
                };
            }

            let labelSegs = label.split(' ');
            labelSegs.pop();

            const index = labelSegs.findIndex((_) => _ === '-');
            if (index > -1) {
                labelSegs = labelSegs.slice(index + 1);
            }
            const result = {
                deviceId,
                label: labelSegs.join(' '),
            };
            return result;
        });
}).then((list) => {
    console.log(list)
});

function testAudio() {
    const audio1 = new Audio(soundUrl);
    audio1.loop = true;
    const audio2 = new Audio(soundUrl);
    audio2.loop = true;
    
    audio1.play().then(() => {
        audio1.setSinkId('d285218cbc80116667727503eb3b4a92758a9aef106336a576be8c58b1688687').then(() => {
            console.log('audio - 1', 'success');
        }).catch(e => {
            console.error('audio - 1', 'error', e);
        });
    });

    audio2.play().then(() => {
        const audioCtx = new AudioContext();
        const audio2SourceNode = audioCtx.createMediaElementSource(audio2);
        audio2SourceNode.connect(audioCtx.destination);

        audio2.setSinkId('default').then(() => {
            console.log('audio - 2', 'success');
        }).catch(e => {
            console.error('audio - 2', 'error', e);
        });
    });


}

function App() {
    useEffect(() => {
        testAudio();
    }, []);

    return (
        <Router>
            <div className="App">
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/topics">Topics</Link></li>
                        </ul>
                    </nav>
                </header>
                <section>
                    <Switch>
                        <Route path="/about">
                            <About></About>
                        </Route>
                        <Route path="/topics">
                            <Topics />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </section>
                <Counter />
                <KeepFocus />
            </div>
        </Router>
    );
}

export default App;
