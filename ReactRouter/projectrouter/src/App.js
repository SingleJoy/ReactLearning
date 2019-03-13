import React, { Component } from 'react';

import {BrowserRouter as Router,Route,Link} from "react-router-dom"

import routers from './route/Router'

import './App.css';

class App extends Component {
  render() {
    return (
     <Router>
         <div>
             <header className="header">
                 <Link to="/">Home</Link>
                 <Link to="/Shop">Shop</Link>
                 <Link to="/User">User</Link>
             </header>
             <div className="content">
                 {
                     routers.map((route,key)=>{
                         if(route.exact){
                             return <Route exact key={key} path={route.path} component={route.component}/>
                         }else{
                           return <Route key={key} path={route.path} component={route.component}/>
                         }
                     })
                 }
             </div>
         </div>

     </Router>

    );
  }
}

export default App;
