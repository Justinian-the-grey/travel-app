import './App.css';
import Navbar from './components/navbar/Navbar';
import Destinations from './components/destinations/Destinations';
import Data from './data';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Destinations dest={Data} />
    </div>
  );
}

export default App;
