
import Home from "../component/Home";
import Shop from "../component/Shop";
import User from "../component/User";

let routers=[
    {
        path:'/',
        component:Home,
        exact:true
    },
    {
        path:'/Shop',
        component:Shop,
    },
    {
        path:'/User',
        component:User,
    }
];

export default  routers