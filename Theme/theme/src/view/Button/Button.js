import React from 'react'

const Theme={
    light:{
        fontSize:'16px',
        width:'100px',
        background:'#fff',
        color:'#333',
        borderRadius:'5px',
        height:'40px',
        textAlign:'center',
        lineHeight:'40px'

    },
    dark:{
        fontSize:'16px',
        width:'100px',
        background:'#70757c',
        color:'#fff',
        borderRadius:'5px',
        height:'40px',
        textAlign:'center',
        lineHeight:'40px'

    }
}

class Button extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
              <button className={Theme.light}>浅色</button>
              <button className={Theme.dark}>深色</button>
            </div>
        )
    }
}


export default Button;