import React, {Component} from 'react';
import url from  'url';
class ProductDetail extends Component {
    constructor(props) {
        super(props);

    }


    componentDidMount() {
        let id=url.parse(this.props.location.search,true).query;
        console.log(id)
    }

    render() {
        return (
            <div>
                <h2>

                </h2>
            </div>
        )
    }
}

export default ProductDetail;