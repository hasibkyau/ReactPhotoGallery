import React, { Component } from "react";
import { Form, Button, Input } from "reactstrap";
import { connect } from "react-redux";
import * as actionTypes from '../../redux/actionTypes';
const mapDispatchToProps = dispatch =>{
    return{
        addComment: (dishId, rating, author, comment) => dispatch({
            type: actionTypes.ADD_COMMENT,
            payload: {
                dishId: dishId,
                author: author,
                rating: rating,
                comment: comment,
            }
        }),

        deleteComment: ()=> dispatch({})
    }
}

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: '',
            rating: '',
            comment: '',
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleInputChange = event =>{
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = event =>{      
        this.props.addComment(this.props.dishId, this.state.rating, this.state.author, this.state.comment);
        //console.log(this.props);
        this.setState({
            author: '',
            rating: '',
            comment: '',
        })
      
        event.preventDefault();
    }

    render() {
        // console.log(this.props);
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Input
                        type="text"
                        name="author"
                        value={this.state.author}
                        placeholder="Your Name"
                        required
                        onChange = {this.handleInputChange}
                    />
                    <br />
                    <Input
                        type="select"
                        name="rating"
                        value={this.state.rating}
                        onChange = {this.handleInputChange}
                    >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                    <br />
                    <Input
                        type="textarea"
                        name="comment"
                        value={this.state.comment}
                        placeholder="Your Comment"
                        required
                        onChange = {this.handleInputChange}
                        >
                    </Input>
                    <br />
                    <Button
                        type="submit">Submit Form</Button>
                </Form>
            </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(CommentForm);