import React, { Component } from "react";

import { withRouter } from "react-router-dom";

class Card extends Component {
  constructor(props) {
    super(props);
  }

  onClickShowUpdateForm = id => {
    this.props.history.push(`/blogs/update/${id}`);
  };

  render() {
    const { id, title, description, imageUrl, onDeleteBlog } = this.props;
    return (
      <div className="card">
        <div className="card-img-container">
          <img className="card-img" src={imageUrl} />
        </div>
        <h1>{title}</h1>
        <p>{description}</p>
        <button
          onClick={() => {
            this.onClickShowUpdateForm(id);
          }}
        >
          update
        </button>
        <button
          onClick={() => {
            onDeleteBlog(id);
          }}
        >
          delete
        </button>
      </div>
    );
  }
}

export default withRouter(Card);
