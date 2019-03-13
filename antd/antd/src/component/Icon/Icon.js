import React, {Component} from 'react';

import { Icon } from 'antd';

class Icons extends Component {

    render() {
        return (
            <div className="Icon">
                <Icon type="message" style={{ fontSize: '40px', color: '#08c' }} />
                <Icon type="calendar" style={{ fontSize: '20px', color: '#000' }} />
                <Icon type="setting" style={{ fontSize: '30px', color: '#000' }} />
            </div>
        )
    }
}

export default Icons;