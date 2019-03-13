import React, {Component} from 'react';

class User extends Component {
    componentDidMount() {
        console.log("这里是User组件")
    }
    render() {
        return (
            <div>
                <h3>这里是User组件</h3>
            </div>
        )
    }
}

export default User;