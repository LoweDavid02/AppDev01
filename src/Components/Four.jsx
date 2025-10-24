export default function Four() {
  const name = "Lowe";
  const items = ["React", "Vite", "JSX"];
  return (
    <div>
      <h3>Hello, {name}!</h3>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
