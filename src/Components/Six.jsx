export default function Six() {
  const isLoggedIn = true;

  return (
    <div>
      {isLoggedIn ? <h3>Welcome back!</h3> : <h3>Please log in.</h3>}
    </div>
  );
}
