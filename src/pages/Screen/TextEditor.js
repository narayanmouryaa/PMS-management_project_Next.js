import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const TextEditor = () => {
  const [content, setContent] = useState('');

  const handleChange = (value) => {
    setContent(value);
  };

  return (
    <div style={{width:'700px',marginLeft:'30px',marginTop:'20px'}}>
      <ReactQuill value={content} onChange={handleChange} />
    </div>
  );
};

export default TextEditor;