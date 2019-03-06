import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Home.scss';

class Home extends Component {

    constructor(props){
        super(props);
        this.state={
            list:[],
            domain:'http://a.itying.com/'
        }
    }
    requestData=()=>{

        // 列表：http://a.itying.com/api/productlist
        // 详情：http://a.itying.com/api/productcontent?id=5ac1a22011f48140d0002955
        let api=this.state.domain+'api/productlist';
        axios.get(api).then((res)=>{
            let list=res.data.result
            console.log(list)
                this.setState({
                    list:list
                })
        }).catch(error=>{
            console.log("获取数据失败");
        })
    }

    componentDidMount() {
        this.requestData()
    }

    render() {
        return (
            <div className="home">

                {
                 this.state.list.map((item,index)=>{
                     return(
                         <div className="good-content" key={index}>
                             <h4>{item.title}</h4>
                             <ul className="item-list">
                                 {
                                     item.list.map((item,index)=>{
                                         return(
                                             <li key={index} >
                                                 <Link to={`/Goods/${item._id}`} >
                                                     <div className="inner">
                                                         <img  src={`${this.state.domain}${item.img_url}`} alt={item.title}/>
                                                         <p className="title">{item.title}</p>
                                                         <p className="price">￥{item.price}元</p>
                                                     </div>
                                                 </Link>
                                             </li>
                                         )
                                     })
                                 }
                             </ul>
                         </div>
                     )
                })
                }

            </div>
        )
    }
}

export default Home;