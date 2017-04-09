import React, { Component } from 'react';
import styled from 'styled-components';
import { Field, reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { connect, bindActionCreators } from 'react-redux';

const Input = styled.input`
  width: 80%;
  outline: 0;
  height: 3rem;
`;
const Container = styled.div`
  background-color: skyBlue;
  border: black solid 1px
  width:100%;
  height:100%;
  display: flex;
  flex-direction: column;
  align-content: center;
`;
const PostElement = styled.div`
  border: black solid 1px
  width:90%;
  height: 40%;
  margin: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-content: center;
`;
const PostInputElement = styled.div`
  display: flex;
  justify-content: center;
  width:90%;
  height: 30%;
  padding: 1rem;
  outline: 0;
  border: none;
`;
const Form = styled.form`
  border: black solid 1px
  height:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TextArea = styled.textarea`
  width: 100%;
  height: 90%;
  font-size: 1.3rem;
  border: black 1px solid;
`;

const SubmitBtn = styled.button`
  width:  5em;
  height: 3em;
  box-shadow: 0px 1px 2px grey;
  border: none;
`;
const Label = styled.label`
  width: 100%;
  height: auto;
  text-align:center;
`;

const renderInput = (field) => {
  return (
  <PostInputElement>
    <Input {...field.input} type={field.type}/>
    {field.meta.touched && 
     field.meta.error &&
     <span>{field.meta.error}</span>}
    </PostInputElement>
  );

};

const renderTextArea = (field) => {
  return (
  <PostInputElement>
    <label>{field.label}
    <TextArea {...field.input} type={field.type}/>
    {field.meta.touched && 
     field.meta.error &&
     <span>{field.meta.error}</span>}</label>
    </PostInputElement>
  );

};

class PostsNew extends Component {
  onSubmit(props){
    this.props.createPost(props).then( () => this.context.router.push('/'));
  }  
  render() {
    const { handleSubmit } = this.props;
    return (
      <Container>
        <Form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
              <Field
                label="Title"
                name="Title"
                component={renderInput}
                type="text" />
              <Field
                label="Categories"
                name="Categories"
                component={renderInput}
                type="text" />
            <Label htmlFor="content">Content: </Label>
            <Field 
              name="content"
              component={renderTextArea}
              type="textarea" />
        <SubmitBtn>submit</SubmitBtn>
        </Form>
        </Container>
    );
  }
}

export default (reduxForm({
  form: 'PostsNew' 
})(PostsNew));


