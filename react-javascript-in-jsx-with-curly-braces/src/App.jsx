export default function App() {
  const person = {
    name: "Gregorio Y. Zara",
    avatar: "https://i.imgur.com/7vQD0fPs.jpg",
    tasks: [
      "Improve the videophone",
      "Prepare aeronautics lectures",
      "Work on the alcohol-fueled engine"
    ]
  };

  return (
    <div>
      <h1>{person.name}'s To Do List</h1>
      <img src={person.avatar} alt={person.name} />

      <ul>
        {person.tasks.map(task => (
          <li key={task}>{task}</li>
        ))}
      </ul>
    </div>
  );
}
