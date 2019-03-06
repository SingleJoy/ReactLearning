import React, {Component} from 'react';
import {Link} from "react-router-dom"
const newsList=[
    {'id':1,title:'vue',"detail":'vue vue vue'},
    {'id':2,title:'react',"detail":'react 视图UI框架'},
    {'id':3,title:'vue-router',"detail":'vue-router'},
    {'id':4,title:'react-router',"detail":'react-router'},
]
const red={
    color:'#ff1100',
}

class News extends Component {

    render() {
        return (
            <div >
                <h2>params传值</h2>
                <ul>
                    {
                        newsList.map((item)=>{
                            return(
                                <li key={item.id} className="newsLi">
                                  <Link to={`/NewsDetail/${item.id}`}>
                                      <span className='red'>{item.id}.</span>
                                      {item.detail}
                                      </Link>

                                </li>
                            )
                        })
                    }
                </ul>

            </div>
        )
    }
}

export default News;