import './App.css';
import Dice from './Dice'

function App() {
  return (
    <div className="App">
      <Dice numDice={4} maxVal={6} title="Roll Me!"/>
      <Dice numDice={6} maxVal={20} title="Main Game"/>
    </div>
  );
}

export default App;
