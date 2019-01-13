import React from 'react';


class ButtonCut extends React.Component{
    constructor(props){
        super(props);
        this.state=({
            index:this.props.index
        })
    }

    render(){
        let index=this.state.index;
        return(
            <div>
                <button onClick={this.props.cutItem(index)}>-</button>
            </div>
        )
    }
}
export default ButtonCut;