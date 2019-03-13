import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Login from '../components/Login/Login';
import News from '../components/News/News';

import NewDetail from '../components/News/NewsDetail';
import NewsHeader from '../components/News/NewsHeader';
import NewsBody from '../components/News/NewsBody';
import NewsFooter from '../components/News/NewsFooter';

import Product from '../components/Product/Product';
import ProductDetail from '../components/ProductDetail/ProductDetail';

const routers=[
    {
        path:'/',
        component:Header,
        exact:true
    },
    {
        path:'/Footer',
        component:Footer,
    },
    {
        path:'/Login',
        component:Login,
    },
    {
        path:'/News',
        component:News,
        routes:[
            {
                path:'/News/NewDetail',
                component:NewDetail,
                exact: true,
            },
            {
                path:'/News/NewsHeader',
                component:NewsHeader,
            },
            {
                path:'/News/NewsBody',
                component:NewsBody,
            },
            {
                path:'/News/NewsFooter',
                component:NewsFooter,
            },
        ]
    },
    {
        path:'/Product',
        component:Product,
        routes:[
            {
                path:'/Product/ProductDetail',
                component:ProductDetail
            }
        ]
    },

];


export default routers;