import React, { Component } from 'react';
class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg:'我是一个home组件'
        };
    }
    render() {
        return (
            <div className="home">
                Shop组件
            </div>
        );
    }
}

export default Shop;
