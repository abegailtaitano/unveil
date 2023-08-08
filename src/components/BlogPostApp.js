import React, { useState } from 'react';
import {
  appContainer,
  inputField,
  postContainer,
  postTitle,
  postContent,
  createButton,
  updateButton,
  deleteButton,
  header,
} from '../styles';

function BlogPostApp() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [posts, setPosts] = useState([]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleCreatePost = () => {
    const newPost = { title, content };
    setPosts([...posts, newPost]);
    setTitle('');
    setContent('');
  };

  const handleUpdatePost = (index, updatedPost) => {
    const updatedPosts = [...posts];
    updatedPosts[index] = updatedPost;
    setPosts(updatedPosts);
  };

  const handleDeletePost = (index) => {
    const updatedPosts = [...posts];
    updatedPosts.splice(index, 1);
    setPosts(updatedPosts);
  };

  return (
    <div style={appContainer}>
      <h1 style={header}>UNVEIL WHAT'S IN YOUR MIND</h1>

      <div>
        <input type="text" placeholder="Title" style={inputField} value={title} onChange={handleTitleChange} />
        <textarea placeholder="Content" style={inputField} value={content} onChange={handleContentChange} />
        <button onClick={handleCreatePost} style={createButton}>Create Post</button>
      </div>

      <div>
        <h2>-------</h2>
        {posts.map((post, index) => (
          <div key={index} style={postContainer}>
            <h3 style={postTitle}>{post.title}</h3>
            <p style={postContent}>{post.content}</p>
            <button onClick={() => handleUpdatePost(index, { ...post, title: 'Updated Title' })} style={updateButton}>Update</button>
            <button onClick={() => handleDeletePost(index)} style={deleteButton}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogPostApp;





