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
            "commented":true   //商品是否已经评价了
        },
        {
            "id":"2",
            "picture":"http://p1.meituan.net/600.600/deal/9b729d9daf702f0c8b34abcac110a539377663.jpg@220w_125h_1e_1c",
            "name":"2222222222",
            "title":"商品简称222222222222",
            "price":"￥29.9元",
            "commented":false    //商品是否已经评价了
        },
        {
            "id":"3",
            "picture":"http://p1.meituan.net/600.600/deal/9b729d9daf702f0c8b34abcac110a539377663.jpg@220w_125h_1e_1c",
            "name":"33333333333",
            "title":"商品简称333333333333",
            "price":"￥39.9元",
            "commented":false    //商品是否已经评价了
        }
    ]


class Order extends Component {
    constructor(props){
        super(props);
        this.state={
            data:data
        }
    }
    componentDidMount() {
        console.log("componentDidMount");
    }

    render() {
        return (
            <div className="order">
                {
                    this.state.data.map(item=>{
                        return <OrderItem key={item.id} data={item}/>
                    })
                }
            </div>
        )
    }
}

export default Order;