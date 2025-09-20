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

// 4. Displaying data
const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <Avatar
        imageUrl={user.imageUrl}
        imageSize={user.imageSize}
        name={user.name}
      />
    </>
  );
}

// 5. Conditional rendering
function AdminPanel() {
  return <h2>Admin Panel</h2>;
}
function LoginForm() {
  return <h2>Please log in</h2>;
}
function ConditionalSection({ isLoggedIn }) {
  let content;
  if (isLoggedIn) {
    content = <AdminPanel />;
  } else {
    content = <LoginForm />;
  }
  return <div>{content}</div>;
}
