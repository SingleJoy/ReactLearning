
import Button from "../component/Buttons/Buttons";
import DatePick from "../component/DatePick/DatePick";
import Icons from "../component/Icon/Icon";
import Rows from "../component/Row/Rows";

const routers=[
    {
        path:'/',
        component:Button,
        exact:true
    },
    {
        path: "/DatePick",
        component: DatePick
    },
    {
        path:'/Icons',
        component:Icons
    },
    {
        path:'/Rows',
        component:Rows
    }
];

export default routers