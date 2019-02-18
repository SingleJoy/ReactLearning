import React, { Component } from 'react';
import './OrderItem.scss';

class OrderItem extends Component {
    constructor(props){
        super(props);
        this.state={
            comment:'',
            star:0,
            editing:false
        }
    }
    handleComment=(event)=>{
      this.setState({
          comment:event.value
      })
    }
    render() {
        const {picture,name,title,price,commented}=this.props.data;
        return (
            <div className="order-info">
                <div className="left-info">
                    <img src={picture} alt="图片" className="picture"/>
                </div>
                <div className="right-info">
                    <div className="info-list">
                        <p className="product-name">{name}</p>
                        <p className="product-title">{title}</p>
                        <p className="product-price">{price}</p>
                    </div>
                </div>
                <div className="comment" onClick={this.editingComment}>
                    {
                        commented ?(
                            <button className="comment-btn" >评价</button>
                        ):( <button className="comment-btn active" >已评价</button>)
                    }

                </div>

            </div>
        )
    }
    renderEditCommentArea(){
       return(
          <div className="comment-area">
              <textarea onChange={this.handleComment} value={this.state.comment}></textarea>
              <div className="comment-area">
                  <button className="submit">提交</button>
                  <button className="quit">取消</button>
              </div>
          </div>
       )
    }
    renderCommentStar(){
        const {star}=this.star;
        return(
            <div className="starArea">
                {
                    [1,2,3,4,5].map((item,index)=>{
                        const light=star>=item?'light':'';
                        return <span key={index} className={light}>☆</span>
                    }
                )
                }
            </div>
        )
    }
    editingComment(){

    }
}

export default OrderItem;