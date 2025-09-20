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

// 6. Rendering lists
const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );
  return <ul>{listItems}</ul>;
}

// 7. Responding to events
function AlertButton() {
  function handleClick() {
    alert('You clicked me!');
  }
  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}

// 8. Updating the screen (independent counters)
function CounterButton() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

function IndependentCounters() {
  return (
    <div>
      <h2>Counters that update separately</h2>
      <CounterButton />
      <CounterButton />
    </div>
  );
}

// 9. Using hooks & sharing data (counters that update together)
function SharedCounterButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}

function SharedCounters() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <h2>Counters that update together</h2>
      <SharedCounterButton count={count} onClick={handleClick} />
      <SharedCounterButton count={count} onClick={handleClick} />
    </div>
  );
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div style={{ padding: 20 }}>
      <Welcome /> 
      <AboutPage />
      <Profile />

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Log out' : 'Log in'}
      </button>
      <ConditionalSection isLoggedIn={isLoggedIn} />
      <ShoppingList />
      <AlertButton />
      <IndependentCounters />
      <SharedCounters />
    </div>
  );
}

