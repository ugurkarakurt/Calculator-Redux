import './App.css';
import "98.css";
import './assets/scss/style.scss'
import Keypad from './components/Keypad';
import Display from './components/Display';
import { useSelector } from "react-redux";

function App() {
  const calculator = useSelector((state) => state.calculator);

  return (
    <div className={calculator.power ? "calculator active" : "calculator"}>
      <Display/>
      <Keypad/>
    </div>
  );
}

export default App;
