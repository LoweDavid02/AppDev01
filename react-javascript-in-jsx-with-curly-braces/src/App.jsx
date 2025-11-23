export default function App() {
  const name = "Gregorio Y. Zara";

  return (
    <h1>{name}'s To Do List</h1>
  );
}
const today = new Date();
const formatted = today.toLocaleDateString();
