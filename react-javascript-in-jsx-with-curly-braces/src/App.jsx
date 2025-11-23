export default function App() {
  return (
    <div>
      <h1>Passing Strings with Quotes Example</h1>

      <Avatar
        url="https://i.imgur.com/7vQD0fPs.jpg"
        name="Gregorio Y. Zara"
      />
    </div>
  );
}

function Avatar({ url, name }) {
  return (
    <img
      className="avatar"
      src={url}
      alt={name}
    />
  );
}
