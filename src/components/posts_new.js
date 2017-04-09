import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';
import { SubmitBtn } from './button.js';
import { Input } from './input.js';
import { PostElement, TextArea, Container, BlogTitle } from './post_elements.js';
import { Form } from './form.js';


const Label = styled.label`
  width: 100%;
  height: auto;
  text-align:center;
`;


const BtnContainer = styled.div`
  width: 100%;
  height: auto;
  display:flex;
  justify-content: center;
`;
class PostsNew extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props){
    this.props.createPost(props)
    .then(() => {
      //Blog post has been created, navigate user to the index view
      //We navigate by calling this.context.router.push with the new path to
      //navigate to.
      this.context.router.push('/');
    });
  }

  render() {

    const { fields: {title, categories, content}, handleSubmit } = this.props;

    return (
      <Container>
        <BlogTitle>Create a New Post</BlogTitle>
        <Form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <PostElement single>
            <Label htmlFor="title">Title: </Label>
            <Input type="text" {...title} placeholder={title.touched? title.error:''}/>
          </PostElement>
          <PostElement single>
            <Label htmlFor="categories">Categories</Label>
            <Input type="text" {...categories} placeholder={categories.touched? categories.error:''}/>
          </PostElement>
          <PostElement>
            <Label htmlFor="content">Content</Label>
            <TextArea type="text" {...content} placeholder={content.touched? content.error:''}/>
          <BtnContainer>
          <SubmitBtn>submit</SubmitBtn>
          <SubmitBtn cancel><Link to="/">Cancel</Link></SubmitBtn>
          </BtnContainer>
          </PostElement>

        </Form>
      </Container>
      );
  }
}
function validate(values) {
 const errors = {}; 
 if (!values.title) {
   errors.title = 'Enter a username';
 }
 if (!values.content) {
   errors.content = 'Enter a blog post';
 }
 if (!values.categories) {
   errors.categories = 'Enter a category';
 }

 return errors;
}


export default reduxForm({
  form: 'PostsNew',
  fields: ['title', 'content', 'categories'],
  validate
}, null, { createPost })(PostsNew);


