import { useState } from 'react'
import './App.css'

// 1. Creating and nesting components
function MyButton() {
  return (
    <button>I'm a button</button>
  );
}

function Welcome() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}

// 2. Writing markup with JSX
function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  );
}

// 3. Adding style
function Avatar({ imageUrl, imageSize, name }) {
  return (
    <img
      className="avatar"
      src={imageUrl}
      alt={'Photo of ' + name}
      style={{
        width: imageSize,
        height: imageSize
      }}
    />
  );
}

