import './App.css';
import Gallery from './components/Gallery';
import ChallengeProfile from './components/ChallengeProfile';
import FixedProfile from './components/FixedProfile';
import Profile from './components/CorrectProfile';
import Congratulations from './components/Congratulations';

export default function App() {
  return (
    <div className="app">
      <h1>My First Component</h1>
      
      {/* Main tutorial component */}
      <section>
        <h2>Gallery Example</h2>
        <Gallery />
      </section>

      {/* Challenge solutions */}
      <section>
        <h2>Challenge Solutions</h2>
        
        <div>
          <h3>Challenge 1: Exported Component</h3>
          <ChallengeProfile />
        </div>

        <div>
          <h3>Challenge 2: Fixed Return Statement</h3>
          <FixedProfile />
        </div>

        <div>
          <h3>Challenge 3: Correct Component Name</h3>
          <Profile />
        </div>

        <div>
          <h3>Challenge 4: Custom Component</h3>
          <Congratulations />
        </div>
      </section>
    </div>
  );
}