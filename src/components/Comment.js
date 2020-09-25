import React from "react";
import Axios from "axios";

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = { content: "", author: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const comment = {
      content: this.state.content,
      author: this.state.author,
    };

    Axios.post(`https://localhost:8000/game/${this.props.gameId}/comment`, { comment })
      .then((res) => {
        console.clear();
        console.log("Response", res);
        console.log("Data", res.data);
      })
      .catch((res) => {
        console.log("Catch", res);
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Comment:{" "}
          <input
            name="content"
            type="text"
            value={this.state.content}
            onChange={this.handleChange}
          />{" "}
        </label>
        <label>
          Author:{" "}
          <input
            name="author"
            type="text"
            value={this.state.author}
            onChange={this.handleChange}
          />{" "}
        </label>
        <input type="submit" value="Comment" />
      </form>
    );
  }
}

export default Comment;
