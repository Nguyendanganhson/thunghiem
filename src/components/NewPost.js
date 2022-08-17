import React, { Component } from "react";
export default class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      contents: e.target.value,
    });
    console.log(this.state.contents);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.contents !== null) {
      this.props.onAddPost(this.state.contents);
    }
  };
  render() {
    return (
      <div>
        <label for="">
          <input
            type="text"
            name=""
            value=""
            onChange={this.handleChange}
          ></input>
        </label>
        <button type="submit" onClick={this.handleSubmit}>
          Add Post
        </button>
      </div>
    );
  }
}
