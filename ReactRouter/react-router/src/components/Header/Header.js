import React, {Component} from 'react';

import { Redirect} from "react-router-dom";

class Header extends Component {
    constructor(props){
        super(props)
        this.state={
            loginIng:false
        }
    }
    loginIng=()=>{
        this.setState({ loginIng: true });
    }
    loginOut=()=>{
        this.setState({ loginIng: false });
    }
    render() {
        if(this.state.loginIng){
            return(
                <Redirect to="/Login"/>
            )
        }
        return (
            <div>
                <h2>这个是Header组件</h2>
                {
                    this.state.loginIng?(
                    <button onClick={this.loginOut.bind(this)}>登出</button>
                    ):(
                    <button onClick={this.loginIng.bind(this)}>登入</button>
                    )

                }


            </div>
        )
    }
}

export default Header;