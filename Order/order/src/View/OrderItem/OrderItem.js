import React, { Component } from 'react';
import './OrderItem.scss';

class OrderItem extends Component {
    render() {
        const {picture,name,title,price,commented}=this.props.data;
        return (
            <div className="order-info">
                <div className="left-info">
                    <img src={picture} alt="图片" className="picture"/>
                </div>
                <div className="right-info">
                    <div className="info-list">
                        <p className="product-name">{name}</p>
                        <p className="product-title">{title}</p>
                        <p className="product-price">{price}</p>
                    </div>


                </div>
                <div className="comment">
                    {
                        commented ?(
                            <button className="comment-btn" >评价</button>
                        ):( <button className="comment-btn active" >已评价</button>)
                    }

                </div>

            </div>
        )
    }
}

export default OrderItem;