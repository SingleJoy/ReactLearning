import React, { Component } from 'react';
import './OrderItem.scss';

class OrderItem extends Component {
    constructor(props){
        super(props);
        this.state={
            comment:props.data.comment||'',
            star:props.data.star||0,
            editing:false
        }
        this.editingComment=this.editingComment.bind(this);
    }

    handleComment=(event)=>{
        console.log(event.target.value);
        this.setState({
            comment:event.target.value
        })
    }

    editingComment=()=>{

        let editing=this.state.editing;
        const {commented}=this.props.data;
        if(!commented){
            this.setState({
                comment:'',
                star:0,
                editing:!editing
            })
        }else {
            this.setState({
                comment:this.props.data.comment,
                star:this.props.data.star,
                editing:!editing
            })
        }

    }

    quitComment=()=>{
        let editing=this.state.editing;
        const {commented}=this.props.data;
        if(!commented){
            this.setState({
                comment:'',
                star:0,
                editing:!editing
            })
        }else {
            this.setState({
                comment:this.props.data.comment,
                star:this.props.data.star,
                editing:!editing
            })
        }
    }

    submitComment=()=>{
        const  {id}=this.props.data;
        const {comment,star}=this.state;

        this.props.submitComment(id,comment,star);
        let editing=this.state.editing;
        this.setState({
            editing:!editing,
            comment:this.props.data.comment||'',
            star:this.props.data.star||0,
        });

    }

    setStar=(index)=>{

        this.setState({
            star:index+1
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
                <div className="comment" >
                    {
                        commented ?
                            (<button className="comment-btn active" onClick={()=>this.editingComment()} >已评价</button>) :
                            (<button className="comment-btn" onClick={()=>this.editingComment()}>评价</button>)
                    }
                </div>
                {
                    this.state.editing?this.renderEditCommentArea():null
                }

            </div>
        )
    }

    renderEditCommentArea(){
        const {comment}=this.state;
        const {commented}=this.props.data;
        return(
            <div className="comment-area">
                <textarea onChange={this.handleComment} value={comment} disabled={commented}></textarea>
                {this.renderCommentStar()}
                <div className="comment-operate">
                    {
                        commented?
                            (
                                <div>
                                    <button className="submit">提交</button>
                                    <button className="quit" onClick={this.quitComment.bind(this)}>取消</button>
                                </div>
                            ):
                            (
                                <div>
                                    <button className="submit" onClick={this.submitComment.bind(this)}>提交</button>
                                    <button className="quit" onClick={this.quitComment.bind(this)}>取消</button>
                                </div>
                            )

                    }

                </div>
            </div>
        )
    }

    renderCommentStar(){
        const {star}=this.state;
        const {commented}=this.props.data;
        return(
            <div className="starArea">
                {
                    [1,2,3,4,5].map((item,index)=>{
                            const light=star>=item?'light':'';
                            return(
                                commented ?
                                    (<span key={index} className={light}>☆</span>):
                                    (<span key={index} className={light} onClick={this.setStar.bind(this,index)}>☆</span>)
                            )
                        }
                    )
                }
            </div>
        )
    }

}

export default OrderItem;