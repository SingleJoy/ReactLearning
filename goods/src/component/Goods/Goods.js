import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import './Goods.scss';

class Goods extends Component {
    constructor(props){
        super(props);
        this.state=({
            list:[],
            domain:'http://a.itying.com/'
        })
    }
    requestData(id){
        // 详情：http://a.itying.com/api/productcontent?id=5ac1a22011f48140d0002955
        let api=this.state.domain+'api/productcontent?id='+id;
        axios.get(api).then((res)=>{
            console.log(res.data.result[0])
            let list=res.data.result[0];
            this.setState({
                list:list
            })
        }).catch(error=>{
            console.log("请求数据异常")
        })
    }

    componentDidMount() {
       let id=this.props.match.params.id;
        // url.parse(this.props.location.search,true).query;
       this.requestData(id)
    }

    render() {
        const {img_url,price,title,content}=this.state.list;
        return (
            <div className="goods">
                <div className="goods-content">
                    <div className="back">
                        <Link to="/" >返回</Link>
                    </div>
                    {
                        img_url?<img src={`${this.state.domain}${img_url}`} alt={title}/>:''
                    }

                    <p className="name">{title}</p>
                    <p className="price">{price}/份</p>
                </div>
                <div className="goods-detail">
                    <h4>商品详情</h4>
                    <div className="detail">
                        <div dangerouslySetInnerHTML={{__html:content}} ></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Goods;