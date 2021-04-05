import React from 'react';

// This file exports the Input, TextArea, and FormBtn components

export function Label(props) {
  return (
    <div className='form_left'>
      <label> {props.text}</label>
    </div>
  );
}

export function Input(props) {
  return <input className='form_right' {...props} />;
}

export function P(props) {
  return (
    <p className='form_right' {...props}>
      {props.text}
    </p>
  );
}

export function TextArea(props) {
  return <textarea className='form_right' {...props} />;
}

export function Select(props) {
  return <select className='form_right' {...props} />;
}
