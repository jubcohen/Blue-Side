import React from 'react';
import { Switch, Route } from 'react-router-dom";

import home from './pages/home';

export default () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>

            <Route exact path="/config">
                Pagina configurações
            </Route>
            <Route exact path="/sobre">
                Sobre
            </Route>
        </Switch>
    );
}