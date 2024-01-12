
import './App.css';
import Quotes from './components/Quotes';
import Game from './components/Game';

function App() {
  return (
    <div className="App">
      <div id="game">
      <Game/>
      </div>
      <div id="quote">
        <Quotes/>
      </div>
    
    </div>
  );
}

export default App;
