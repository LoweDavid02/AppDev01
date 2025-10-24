function Greeting({ name }) {
  return <h3>Hello, {name}!</h3>;
}

export default function Five() {
  return (
    <div>
      <Greeting name="Lowe" />
      <Greeting name="React Learner" />
    </div>
  );
}
