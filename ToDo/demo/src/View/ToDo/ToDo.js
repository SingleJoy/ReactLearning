import React from 'react';
import ButtonAdd from '../Button/ButtonAdd';
import ButtonCut from '../Button/ButtonCut';
import './ToDo.css'
const array=[
    {name:'li',age:'20'},
    {name:'zhang',age:'22'},
    {name:'wang',age:'20'},
    {name:'chen',age:'20'},
];

class ToDo extends React.Component{
    constructor(props){
        super(props);
        this.inputName=this.inputName.bind(this);
        this.inputAge=this.inputAge.bind(this);
        this.cutItemToDo=this.cutItemToDo.bind(this);

        this.state=({
            name:'',
            age:'',
            array:array
        })
    }
    inputName(event){
        this.setState({
            name:event.target.value
        })

    }
    inputAge(event){
        this.setState({
            age:event.target.value
        })
    }
    cutItemToDo(index){

       let arrayA=this.state.array;
       arrayA.splice(index,1);
        this.setState({
            array:arrayA
        })

    }
    addItem(){
        console.log(1111)
        let arrayB=this.state.array;
            arrayB.concat({name:this.state.name, age:this.state.age});
        this.setState({
            array:arrayB,
            name:'',
            age:''
        })
    }
    render() {

        return(
            <div className="list">
                <ul>{
                    this.state.array.map((item,index)=>{
                        return(
                            <li key={index} data-title={index}>
                                {item.name}-----
                                {item.age}----
                                <div className='pStyle'>
                                    <ButtonCut index={index} cutItem={this.cutItemToDo}/>
                                </div>
                            </li>
                        )
                    })
                }
                    <li>
                        <p className='pStyle'><input className='inputDefault' placeholder='input name' onChange={this.inputName}/></p>
                        <p className='pStyle'><input className='inputDefault' placeholder='input age' onChange={this.inputAge}/></p>
                        <div className='pStyle'>
                            <ButtonAdd  AddItem={this.addItem.bind(this)}/>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

export  default ToDo;