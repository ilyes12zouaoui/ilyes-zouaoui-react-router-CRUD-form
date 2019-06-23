import React, { Component } from "react";
import { Link, Switch, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import Company from "./Company";
import About from "./About";
import PageNotFound from "./PageNotFound";

import FormCreate from "./FormCreate";
import FormUpdate from "./FormUpdate";

import Blogs from "./Blogs";

class AppRouter extends Component {
  state = {
    listBlogs: []
  };

  onCreateBlog = (id, title, description, imageUrl) => {
    const { listBlogs } = this.state;
    this.setState({
      listBlogs: [...listBlogs, { id, title, description, imageUrl }]
    });
  };

  onUpdateBlog = (id, title, description, imageUrl) => {
    const { listBlogs } = this.state;

    let newListBlogs = listBlogs.map(blog => {
      if (blog.id == id) return { id, title, description, imageUrl };
      return blog;
    });
    this.setState({ listBlogs: newListBlogs });
  };

  getBlogById = id => {
    const { listBlogs } = this.state;
    const blog = listBlogs.find(blog => {
      return blog.id == id;
    });
    return blog;
  };

  onDeleteBlog = id => {
    const { listBlogs } = this.state;

    this.setState({
      listBlogs: listBlogs.filter(blog => {
        return blog.id != id;
      })
    });
  };

  render() {
    const { listBlogs } = this.state;
    return (
      <>
        <div>
          <NavLink to="/" exact activeClassName="active-link">
            Home
          </NavLink>{" "}
          <NavLink to="/company" exact activeClassName="active-link">
            Company
          </NavLink>{" "}
          <NavLink to="/blogs/create" exact activeClassName="active-link">
            create blog
          </NavLink>{" "}
          <NavLink to="/blogs" exact activeClassName="active-link">
            list blogs
          </NavLink>{" "}
          <NavLink to="/about" exact activeClassName="active-link">
            About
          </NavLink>
        </div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/company" exact component={Company} />
          <Route
            path="/blogs/create"
            exact
            render={props => {
              return <FormCreate {...props} onCreateBlog={this.onCreateBlog} />;
            }}
          />
          <Route
            path="/blogs/update/:id"
            exact
            render={props => {
              return (
                <FormUpdate
                  {...props}
                  getBlogById={this.getBlogById}
                  onUpdateBlog={this.onUpdateBlog}
                />
              );
            }}
          />
          <Route
            path="/blogs"
            exact
            render={props => {
              return (
                <Blogs
                  {...props}
                  onDeleteBlog={this.onDeleteBlog}
                  listBlogs={listBlogs}
                />
              );
            }}
          />

          <Route component={PageNotFound} />
        </Switch>
      </>
    );
  }
}

export default AppRouter;
