import React, { Component } from 'react';
import OrderItem from '../OrderItem/OrderItem';
import './Order.scss';

const data={
    id:1,
    picture:'http://p1.meituan.net/600.600/deal/9b729d9daf702f0c8b34abcac110a539377663.jpg@220w_125h_1e_1c',
    name:'商品名称',
    title:'商品简称',
    price:'￥19.9元',
    commented:false    //商品是否已经评价了
};

class Order extends Component {
    render() {
        return (
            <div className="order">
                <OrderItem data={data}/>
            </div>
        )
    }
};

export default Order;