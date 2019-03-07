import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link ,Redirect} from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }

    render() {
        return (
            <div>
              <h2>我是Login组件</h2>
            </div>
        )
    }
}

export default Login