import React,{Component} from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import routers from "./router/router"
import './App.scss'

class App extends Component{


    render() {
        return (
            <Router>
                <section className="app">

                    <div className="header">
                        <p>antd design</p>
                    </div>

                    <section className="body">
                        <div className="side">
                            <Link to="/">Button</Link>
                            <Link to="/DatePick">DatePick</Link>
                            <Link to="/Icons">Icons</Link>
                            <Link to="/Rows">Rows</Link>
                        </div>
                        <section className="container">
                            {
                                routers.map((route,index)=>{
                                    if(route.exact){
                                        return(
                                            <Route key={index} path={route.path} exact={route.exact} render={props=>(
                                                <route.component{...props} routes={route.routes}/>
                                            )}/>
                                        )
                                    }else {
                                        return(
                                            <Route key={index} path={route.path} render={props=>(
                                                <route.component{...props} routes={route.routes}/>
                                            )}/>
                                        )
                                    }
                                })
                            }
                        </section>
                    </section>

                </section>
            </Router>
        )
    }
}

export default App;