import React, { Component, PropTypes } from 'react';
import {fetchSinglePost} from '../actions/index.js';
import { connect } from 'react-redux';
import { PostItem, Container, BlogTitle, PostElement } from './post_elements.js';
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
  render() {
    if (!this.props.post) {
      return (
        <div>Loading...</div>
      );
    }
    const {title, content, categories} = this.props.post;
    return (
      <Container>
        <BlogTitle>
        <StyledLink to="/">Home</StyledLink>     
          {title}
        </BlogTitle>
        <BlogTitle small>Categories: {categories}</BlogTitle>
        <PostElement single>
          <PostElement content>{content}</PostElement> 
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
export default connect(mapStateToProps, {fetchSinglePost})(PostsShow);

