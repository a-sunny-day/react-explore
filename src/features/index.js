import React from 'react';
import { Route, Switch } from 'react-router';
import Audio_Context from './Explore/AudioContext';

export default function Features() {
    return <div>
        <h1>Feature</h1>
        <Switch>
            <Route path="/">
                <Audio_Context />
            </Route>
        </Switch>
    </div>
}