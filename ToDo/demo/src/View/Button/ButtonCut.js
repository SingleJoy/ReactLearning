import React from 'react';


class ButtonCut extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let index=this.props.index;
        return(
            <div>
                <button onClick={()=>this.props.cutItem(index)}>-</button>
            </div>
        )
    }
}
export default ButtonCut;