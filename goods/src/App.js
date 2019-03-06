import React, { Component } from 'react';

import {BrowserRouter as Router,Route,Link} from "react-router-dom"
import Home from './component/Home/Home';
import Goods from './component/Goods/Goods'

import './App.scss';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">


                    <div>
                        <Route exact path="/" component={Home}/>
                        <Route  path="/Goods/:id" component={Goods}/>
                    </div>

                </div>
            </Router>
        );
    }
}

export default App;
