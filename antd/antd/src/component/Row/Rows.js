import React, {Component} from 'react';

import {Row,Col } from 'antd';

class Rows extends Component {

    render() {
        return (
            <div className="Rows">

               <Row>
                   <Col span={12} style={{background: '#00A0E9'}}>col-12</Col>
                   <Col span={12}>col-12</Col>
               </Row>

                <Row>
                    <Col span={8} style={{background: '#00A0E9'}}>col-8</Col>
                    <Col span={8}>col-8</Col>
                    <Col span={8} style={{background: '#00A0E9'}}>col-8</Col>
                </Row>

                <Row>
                    <Col span={6} style={{background: '#00A0E9'}}>col-6</Col>
                    <Col span={2} offset={4} style={{background: '#006',color:'#fff'}}>col-2 col-offset-4</Col>
                    <Col span={4} offset={2} style={{background: '#527',color:'#fff'}}>col-4 col-offset-2</Col>
                    <Col span={6} style={{background: '#00A0E9'}}>col-6</Col>
                </Row>

            </div>
        )
    }
}

export default Rows;