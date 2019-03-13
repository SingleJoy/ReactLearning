
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './assets/css/index.css';

import routers from './routers/routers';

class App extends Component {

    render() {
        return (
            <Router>
                <div className="content">
                    <header className="title">
                        <Link to="/">头部</Link>
                        <Link to="/News">新闻</Link>
                        <Link to="/Product">商品</Link>
                        <Link to="/Footer">Footer</Link>
                    </header>

                    {/*exact 严格匹配*/}
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
                </div>
            </Router>
        )
    }
}

export default App;
