
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link ,Redirect} from "react-router-dom";
import './assets/css/index.css'
import Header from './components/Header/Header';
import News from './components/News/News'
import NewsDetail from './components/NewsDetail/NewsDetail'
import Product from './components/Product/Product'
import ProductDetail from './components/ProductDetail/ProductDetail'
import Footer from './components/Footer/Footer'
import Login from './components/Login/Login'

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
             <Route exact path="/" component={Header}/>
             <Route  path="/News" component={News}/>
             <Route  path="/NewsDetail/:id" component={NewsDetail}/>
             <Route  path="/Product" component={Product}/>
             <Route  path="/ProductDetail" component={ProductDetail}/>
             <Route  path="/Footer" component={Footer}/>
             <Route  path="/Login" component={Login}/>
             </div>
         </Router>
     )
 }
}

export default App;
