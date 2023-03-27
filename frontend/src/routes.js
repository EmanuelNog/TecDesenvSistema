import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//import Scheduler from './pages/scheduler/scheduler';
import Login from './pages/login/login';
import BigCalendar from './pages/bigCalendar/bigCalendar';
import Register from './pages/register/register';

//<Route path="/scheduler" component={Scheduler}/>

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/calendar" component={BigCalendar}/>
                <Route path="/register" component={Register}/>
            </Switch>
        </BrowserRouter>
    );  
}