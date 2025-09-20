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


