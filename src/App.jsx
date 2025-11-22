import './App.css';
import Card from './components/Card/Card';
import Gallery from './components/Gallery/Gallery';
import TodoList from './components/TodoList/TodoList';
import PackingList from './components/PackingList/PackingList';
import ScientistList from './components/ScientistList/ScientistList';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className="app">
      <h1>React Components Demo</h1>
      
      {/* Profile with Card Example */}
      <section className="section">
        <h2>Profile Card Example</h2>
        <Card>
          <Profile
            person={{
              name: 'Katsuko Saruhashi',
              imageId: 'YfeOqp2'
            }}
            size={100}
          />
        </Card>
      </section>

      {/* Gallery Component */}
      <section className="section">
        <h2>Gallery Example</h2>
        <Gallery />
      </section>

      {/* Todo List Component */}
      <section className="section">
        <h2>Todo List Example</h2>
        <TodoList />
      </section>

      {/* Packing List Component */}
      <section className="section">
        <h2>Packing List Example</h2>
        <PackingList />
      </section>

      {/* Scientist List Component */}
      <section className="section">
        <h2>Scientists List Example</h2>
        <ScientistList />
      </section>
    </div>
  );
}

export default App;