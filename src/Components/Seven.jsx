function Card({ title }) {
  return <div style={{ border: "1px solid gray", margin: "5px", padding: "10px" }}>{title}</div>;
}

export default function Seven() {
  return (
    <div>
      <Card title="Card One" />
      <Card title="Card Two" />
      <Card title="Card Three" />
    </div>
  );
}
