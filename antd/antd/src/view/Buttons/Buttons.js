import React from 'react';

import Button from 'antd/lib/button';

class Buttons extends React.Component{
    constructor(props){
        super(props);
        this.addButton=this.addButton.bind(this);
        this.state={
            num:0
        }

    }
    addButton =()=>{
        this.setState({
            num:this.state.num+1
        });
        console.log(this)
    }
    componentWillMount() {
        console.log('componentWillMount');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log('componentWillReceiveProps');

    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('shouldComponentUpdate');
        return true
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('componentWillUpdate')
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render(){
      return(
          <div className="button">
              <p>{this.state.num}</p>
              <Button type="primary" onClick={this.addButton}>Button</Button>
          </div>
      )
  }
}

export default Buttons;