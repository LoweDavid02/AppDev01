// Pure component: same inputs => same output (no side effects)
function PureGreeting({ name }) {
  return <h3>Hello, {name}!</h3>;
}

export default function Eight() {
  return (
    <div>
      <PureGreeting name="Pure React" />
      <PureGreeting name="Always Predictable" />
    </div>
  );
}
