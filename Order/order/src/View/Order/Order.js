import React, { Component } from 'react';
import OrderItem from '../OrderItem/OrderItem';
import './Order.scss';
let data =
    [
        {
            "id":"1",
            "picture":"http://p1.meituan.net/600.600/deal/9b729d9daf702f0c8b34abcac110a539377663.jpg@220w_125h_1e_1c",
            "name":"1111111111",
            "title":"商品简称111111111111",
            "price":"￥19.9元",
            "commented":true,   //商品是否已经评价了
            "comment":'好吃好吃好吃！好吃好吃好吃！',   //评价内容
            "star":3
        },
        {
            "id":"2",
            "picture":"http://p1.meituan.net/600.600/deal/9b729d9daf702f0c8b34abcac110a539377663.jpg@220w_125h_1e_1c",
            "name":"2222222222",
            "title":"商品简称222222222222",
            "price":"￥29.9元",
            "commented":true,    //商品是否已经评价了
            "comment":'',   //评价内容
            "star":1
        },

        {
            "id":"3",
            "picture":"http://p1.meituan.net/600.600/deal/9b729d9daf702f0c8b34abcac110a539377663.jpg@220w_125h_1e_1c",
            "name":"33333333333",
            "title":"商品简称333333333333",
            "price":"￥39.9元",
            "commented":false ,   //商品是否已经评价了
            "comment":'',   //评价内容
            "star":0
        }
    ]


class Order extends Component {
    constructor(props){
        super(props);
        this.state={
            data:data
        };
        this.submitComment=this.submitComment.bind(this);
    }
    componentDidMount() {
        console.log("componentDidMount");
    }

    submitComment(id,comment,star){
        //传统写法
        // let data=this.state.data;
        // for(let i=0;i<data.length;i++){
        //     if(data[i].id===id){
        //         data[i].commented=true;
        //         data[i].comment=comment;
        //         data[i].star=star;
        //     }
        //     this.setState({
        //         data:data
        //     })
        // }
        //ES6简洁写法
        let  data=this.state.data;
       const newData=data.map(item=>{
         return item.id===id?{
             ...item,
             comment,
             star,
             commented:true
         }:item
        });
        this.setState({
            data:newData
        })
    }

    render() {
        return (
            <div className="order">
                {
                    this.state.data.map(item=>{
                        return <OrderItem key={item.id} data={item} submitComment={this.submitComment}/>
                    })
                }
            </div>
        )
    }
}

export default Order;