import './App.css';
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import Tranding from './components/Tranding';
import Superhero from './components/Superhero';
import "./style/LandingPage.css"

function App() {
  return (
    <div>
      {/* intro Section */}
      <div className='myBG'>
        <NavigationBar />
        <Intro />
      </div>
      {/* intro Section */}

      {/* Trending Section */}
      <div>
        <div className='tranding'>
          <Tranding />
        </div>
      </div>
      {/* Trending Section */}

      {/* Trending Section */}
      <div>
        <div className='superhero'>
          <Superhero />
        </div>
      </div>
      {/* Trending Section */}
    </div>
  );
}

export default App;
