import React from 'react';


class ButtonAdd extends React.Component{

   render(){
        return(
            <div>
                <button onClick={()=>this.props.addItem}>+</button>
            </div>
        )
   }
}
export default ButtonAdd;