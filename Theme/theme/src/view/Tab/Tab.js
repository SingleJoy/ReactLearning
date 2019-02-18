import React from 'react'
import './Tab.scss'

class Tab extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
              <button className="light">浅色</button>
              <button className="dark">深色</button>
            </div>
        )
    }
}


export default Tab;