import React, {Component} from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './News.scss';

class News extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount() {
        console.log(this.props.routes)
    }

    render() {
        return (
            <Router>
                <div>
                    <h2>router传值</h2>

                    <header className="news-header">
                        <Link to='/News/'>News</Link>
                        <Link to='/News/NewsBody'>NewsBody</Link>
                        <Link to='/News/NewsDetail'>NewsDetail</Link>
                        <Link to='/News/NewsFooter'>NewsFooter</Link>
                    </header>
                    {
                        this.props.routes.map((item,index)=>{
                            return(
                                <Route key={index} exact path={item.path} component={item.component}></Route>
                            )
                        })
                    }
                </div>

            </Router>
        )
    }
}

export default News;