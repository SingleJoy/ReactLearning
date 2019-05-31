import React from 'react';

import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import './App.css';

import routers from './router/router'

function App() {
  return (
    <Router>
      <div>
        <header className='header'>
            <Link to='/bubble'>bubble</Link>
        </header>
        <div>
            {
              routers.map((router,key)=>{
                if(router.exact){
                  return <Route exact key />
                }
              })
            }
        </div>
      </div>
    </Router>
  );
}

export default App;
