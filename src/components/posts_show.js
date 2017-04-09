import React, { Component, PropTypes } from 'react';
import {fetchSinglePost, deletePost} from '../actions/index.js';
import { SubmitBtn } from './button.js';
import { connect } from 'react-redux';
import { NavBar, PostItem, Container, BlogTitle, PostElement } from './post_elements.js';
import { Link } from 'react-router';
import StyledLink from './styled_link.js';

class PostsShow extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
  };

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchSinglePost(this.props.params.id);
  }
  onDeleteClick(){
    this.props.deletePost(this.props.params.id);
  }
  render() {
    if (!this.props.post) {
      return (
        <div>Loading...</div>
      );
    }
    const {title, content, categories} = this.props.post;
    return (
      <Container>
        <NavBar>
          <StyledLink to="/">Home</StyledLink>     
          <BlogTitle>
            {title}
          </BlogTitle>
          <SubmitBtn 
            onClick={this.onDeleteClick.bind(this)}
            cancel>Delete Post</SubmitBtn>
        </NavBar>
        <BlogTitle small>Categories: {categories}</BlogTitle>
        <PostElement single content>
          {content} 
        </PostElement>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    post: state.posts.post
  };
}
export default connect(mapStateToProps, {fetchSinglePost, deletePost})(PostsShow);

