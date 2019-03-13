import React, { Component } from 'react';

import {BrowserRouter as Router,Route} from "react-router-dom"

import routes from './router/router'

import './App.scss';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">

                    {
                        routes.map((routeItem,index)=>{
                            if(routeItem.exact){
                                return(
                                    <Route exact path={routeItem.path} key={index} component={routeItem.component}></Route>
                                )
                            }else{
                                return(
                                    <Route  path={routeItem.path} key={index} component={routeItem.component}></Route>
                                )
                            }

                        })
                    }

                </div>
            </Router>
        );
    }
}

export default App;
