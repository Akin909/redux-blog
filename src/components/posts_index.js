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
  background:#00BFB2;
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
  width: 100%;
  background: #1A5E63;
  box-shadow: 0 1px 1px grey;
  text-align: center;
  padding: 1rem;
  margin: 0 0 1rem 0;
  font-family: 'Pacifico', cursive;
  color: whitesmoke;
  text-shadow: 0 1px 0 grey,
  0 1.5px 0 grey;
`;
// box-shadow: 0px 1px 3px grey;
const PostSpan = styled.span`
  font-size: 1.3rem;
  background: ${props => props.button ? '#1A5E63':'white'};
  height: auto;
  border: 0;
  text-align: center;
  padding: 1rem;
  box-shadow: ${props => props.button ? '0 1px 1px grey':'0'}
  margin: 1rem 0;
`;

const PostTitleSpan = styled.span`
 width: 50% 
 border-bottom: 0.5px solid grey;
 font-weight: 800;
 font-size: 1.7rem;
 `;


const PostListTitle = styled.li`
  height: 2rem;
  width: 100%;
  display: flex;
  justify-content: space-around;
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
        <PostListTitle>
          <PostTitleSpan>Title</PostTitleSpan>
          <PostTitleSpan>Category</PostTitleSpan>
        </PostListTitle>
        { this.renderPosts() }
      </PostList>
      <PostSpan button>
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
