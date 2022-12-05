import React, { useState } from 'react';

import './styles.scss'

import { useFormik } from 'formik';

import * as Yup from 'yup';

const Posts = () => {
  const [posts, setPosts] = useState([])
  const formik = useFormik({
      
      initialValues: {
        title: '',
        body : '',
        userId: '',
      },

      validationSchema: Yup.object({
        title: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        body: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        userId: Yup.string()
          .required('Required'),
      }),

      onSubmit: values => {
          
        fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          body: JSON.stringify({
            title: values.title,
            body: values.body,
            userId: values.userId
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
          .then((response) => response.json())
          .then(post => {setPosts([...posts, post])}
          );

        formik.resetForm({
          values: {title: '', body: '', userId: ''},
        });

      },
    });
    
    return (
      <>
      <form onSubmit={formik.handleSubmit} >

        <div>
          <label htmlFor="title" >Title</label>
          <input 
            id="title"
            name="title"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
        </div>

        <div>
          <label htmlFor="body">Body</label>
          <textarea
            id="body"
            name="body"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.body}
          />
        </div>

        <div>
          <label htmlFor="userId">UserId</label>
          <select 
            id="userId"
            name="userId"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.userId}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>

        <button type="submit">Submit</button>

      </form>

      {posts.length === 0 ? <p>No add posts</p> : posts.map(post => {
        return (
          <span key={post.id}>
            Title: {post.title} <br />
            Body: {post.body} 
          </span>
        )
      })}
      </>
    );
    }

  export default Posts