import React,{Component} from "react";

import {Button,Radio, Icon } from 'antd';

import "antd/dist/antd.css";

class Buttons extends Component{
    constructor(props){
        super(props);
        this.state=({
            size:'large'
        })
    }

    handleSizeChange = (e) => {
        console.log(e)
        this.setState({ size: e.target.value });
    }
    render(){
        let size=this.state.size;
        return(
            <div className="buttons">

                <div className="list">
                    <h4>
                        按钮有四种类型：主按钮、次按钮、虚线按钮、危险按钮。主按钮在同一个操作区域最多出现一次。
                    </h4>
                    <div>
                        <Button type="primary">Primary</Button>
                        <Button type="default">Default</Button>
                        <Button type="dash">Dash</Button>
                        <Button type="danger">Danger</Button>
                    </div>
                </div>

                <div className="list">
                    <h4>
                        按钮有大、中、小三种尺寸。

                        通过设置 size 为 large small 分别把按钮设为大、小尺寸。若不设置 size，则尺寸为中。
                    </h4>
                    <div>
                        <Radio.Group value={size} onChange={this.handleSizeChange}>
                            <Radio.Button value="large">Large</Radio.Button>
                            <Radio.Button value="default">Default</Radio.Button>
                            <Radio.Button value="small">Small</Radio.Button>
                        </Radio.Group>
                        <br /><br />
                        <Button type="primary" size={size}>Primary</Button>
                        <Button size={size}>Normal</Button>
                        <Button type="dashed" size={size}>Dashed</Button>
                        <Button type="danger" size={size}>Danger</Button>
                        <br />
                        <Button type="primary" shape="circle" icon="download" size={size} />
                        <Button type="primary" shape="round" icon="download" size={size}>Download</Button>
                        <Button type="primary" icon="download" size={size}>Download</Button>
                        <br />
                        <Button.Group size={size}>
                            <Button type="primary" disabled>
                                <Icon type="left" />Backward
                            </Button>
                            <Button type="primary">
                                Forward<Icon type="right" />
                            </Button>
                        </Button.Group>
                    </div>
                </div>

                <div className="list">
                    <h4>
                        添加 loading 属性即可让按钮处于加载状态，最后两个按钮演
                    </h4>
                    <div>
                        <Button type="primary" size="small" loading >Loading</Button>
                        <Button type="danger" size="large" loading shape="circle" icon="poweroff" block>danger Loading</Button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Buttons;