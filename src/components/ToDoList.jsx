export default function TodoList() {
  const hedy = {
    name: "Hedy Lamarr",
    img: "https://i.imgur.com/yXOvdOSs.jpg",
    todos: [
      "Invent new traffic lights",
      "Rehearse a movie scene",
      "Improve the spectrum technology",
    ],
  };

  const gregorio = {
    name: "Gregorio Y. Zara",
    img: "https://i.imgur.com/7vQD0fPs.jpg",
    theme: { backgroundColor: "black", color: "pink" },
    todos: [
      "Improve the videophone",
      "Prepare aeronautics lectures",
      "Work on the alcohol-fuelled engine",
    ],
  };

  return (
    <>
      {/* Hedy Section */}
      <h1>{hedy.name}'s Todos</h1>
      <img src={hedy.img} alt={hedy.name} className="photo" />
      <ul>
        {hedy.todos.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>

      {/* Gregorio Section */}
      <div style={gregorio.theme}>
        <h1>{gregorio.name}'s Todos</h1>
        <img className="avatar" src={gregorio.img} alt={gregorio.name} />
        <ul>
          {gregorio.todos.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
