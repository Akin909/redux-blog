import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { PostItem } from '../components/post_elements.js';
import { Link } from 'react-router';
import StyledLink from './styled_link.js';

const PostsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: skyBlue;
`;
const PostList = styled.ul`
  list-style-type: none;
  background: whitesmoke;
  overflowY:auto;
  width: 95%;
  height: 50%;
  box-shadow: 0px 1px 3px grey;
  text-align: center;
  padding: 0;
  margin: 1rem 0;
`;
const Title = styled.h1`
  width: 80%;
  text-align: center;
  padding: 1rem;
  margin: 1rem 0;
`;
const PostSpan = styled.span`
  width: 50%;
  height: auto;
  border: 0;
  box-shadow: 0px 1px 3px grey;
  text-align: center;
  padding: 1rem;
  background: white;
  margin: 1rem 0;
`;




class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }


  renderPosts() {
    return this.props.posts.map(post => {
      if (post.title || post.content) {
        const title = post.title;
        return (
          <PostItem key={post.id}>
            <PostSpan>
              <Link to={'post/' + post.id}>
                {post.title}
              </Link>
              </PostSpan>
              <PostSpan>
                {post.categories? post.categories : 'No category'}
              </PostSpan>
            </PostItem>
            );
  }
});
}

render() {
  return (
    <PostsContainer>
      <Title>Blogatron</Title>
      <PostList>
        { this.renderPosts() }
      </PostList>
      <PostSpan>
        <Link to="/posts/new">Add a Post</Link>
      </PostSpan>
    </PostsContainer>
    );
}
}
function mapStateToProps(state) {
  return { posts: state.posts.all };
}

// We passed in fetchPosts in an object directly in place of mapping props to
// dispatch and binding action creators
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
