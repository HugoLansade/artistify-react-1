import React, { Component } from "react";
import axios from "axios";
import Comment from "./Comment";
import {withRouter} from "react-router-dom"

class Comments extends Component {
  state = {
    comments:[],
    comment:""
  };

  componentDidMount() {
    
    this.fetchComments();
  }

  fetchComments = async () => {
      
    try {
      const res = await axios.get(
        "http://localhost:5000/api/comments/artists/" +
          this.props.match.params.id
      );
      this.setState({
        comments: res.data,
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleSubmit = async (e) => {
      console.log("tototototto")
      console.log(this.props.match.params.id)
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/comments/artists/" + this.props.match.params.id, this.state.comment);
      this.setState({
          comment : res.data});
    } catch (err) {
      console.error(err);
    }
  };

  handleChange = (e) => {
      console.log(e.target.value)
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { comments } = this.state;
    console.log(comments)
    return (
      <div>
        <h1>Express Yourself :</h1>
        <div>
          <input
            name="comment"
            type="text"
            placeholder="type your comment"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <button onClick={this.handleSubmit}>ok</button>
        </div>
        <div>
          {comments ? (
            <p>No comments....</p>
          ) : (
            comments.map((comment, index) => {
              return (
                <div key={index}>
                  <Comment message={comment} />
                </div>
              );
            })
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(Comments);
