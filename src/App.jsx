import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Counters from './components/counters';
import Header from './components/header';
import Timer from './components/timer';
import { MemoryRouter } from "react-router";
import Placeholder from './components/placeholder';

export default class App extends Component {
    render() {
        return (
            <MemoryRouter>
                <React.Fragment>
                    <Header style="-webkit-app-region: drag" />
                    <main role="main" className="container mt-3">
                        <Route exact={true} path="/" component={() => <Redirect to="/timer" />} />
                        <Route path="/counter" component={Counters} />
                        <Route path="/timer" component={Timer} />
                        <Route path="/placeholder" component={Placeholder} />
                        <Route component={() => <Redirect to="/timer" />} />
                    </main>
                </React.Fragment>
            </MemoryRouter>
        );
    }
}
