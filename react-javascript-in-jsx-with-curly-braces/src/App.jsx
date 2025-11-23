export default function App() {
  const person = {
    name: "Gregorio Y. Zara",
    backgroundColor: "black",
    color: "pink"
  };

  return (
    <div style={{ 
      backgroundColor: person.backgroundColor,
      color: person.color,
      padding: "20px" 
    }}>
      <h1>{person.name}'s Styled Component</h1>
    </div>
  );
}
