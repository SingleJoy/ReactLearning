import React, {Component} from 'react';
import {Link} from "react-router-dom"

const productList=[
    {"id":"1","productContent":'商品详情111111'},
    {"id":"2","productContent":'商品详情2222222'},
    {"id":"3","productContent":'商品详情3333333'},
]

class Product extends Component {


    render() {
        return (
            <div>
                <h2>
                    商品详情，地址栏传值
                </h2>
                <ul>
                    {
                        productList.map((item)=>{
                           return(
                               <li key={item.id} className="productLi">
                                   <Link to={`/productDetail/?id=${item.id}`}>
                                       <span className="red">{item.id}</span>
                                       {item.productContent}
                                   </Link>

                               </li>
                           )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Product;