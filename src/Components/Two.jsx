function Header() {
  return <h2>This is the Header</h2>;
}

function Footer() {
  return <p>This is the Footer</p>;
}

export default function Two() {
  return (
    <div>
      <Header />
      <p>Main content of Two</p>
      <Footer />
    </div>
  );
}
