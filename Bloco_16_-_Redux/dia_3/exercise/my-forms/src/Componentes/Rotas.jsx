import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Forms from '../Componentes/Forms';
import User from '../Pages/User';

export default function routesContainer() {
    return(
        <>
        <Switch>
            <Route exact path='/' component={Forms} />
            <Route path='/user' component={User} />
        </Switch>
        </>
    );
}