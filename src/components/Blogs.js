import React, { Component } from "react";
import Card from "./Card";

class Blogs extends Component {
  render() {
    const { listBlogs, onDeleteBlog } = this.props;
    return (
      <div>
        {listBlogs.map(blog => {
          return <Card key={blog.id} onDeleteBlog={onDeleteBlog} {...blog} />;
        })}
      </div>
    );
  }
}

export default Blogs;
