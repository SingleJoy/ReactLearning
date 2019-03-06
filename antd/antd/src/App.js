import React from 'react';
import ReactDOM from 'react-dom';

// import DatePick from './view/DataPick/DataPick'
import Buttons from './view/Buttons/Buttons'
import './App.css'

class App extends React.Component{


    render() {
        return (
            <div className="content">
                <div className="list">
                    <div className="list-item">
                        <h3>antd Button</h3>
                        <Buttons/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;