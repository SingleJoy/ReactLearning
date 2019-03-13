import Goods from '../component/Goods/Goods';

import Home from '../component/Home/Home';

const routes=[
    {
        path:'/',
        component:Home,
        exact:true
    },
    {
        path:'/Goods/:id',
        component:Goods
    }
];

export default routes;