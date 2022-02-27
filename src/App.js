import './App.css';
import Example from './Components/example.js';
import Graph from './Components/Graph'
import Navbar from './Components/Navbar.js'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Graph />
      <Example />
    </div>
  );
}

export default App;
