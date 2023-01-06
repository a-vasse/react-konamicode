import { useState } from "react";
import './App.css';
import Code from './components/code/Code';
import Keys from './components/keys/Keys';

function App() {
	const [keys, setKeys] = useState([
		{
			letter: "a",
      symbol: "a"
		},
    {
			letter: "b",
      symbol: "b"
		},
    {
			letter: "ArrowUp",
      symbol: "↑"
		},
    {
			letter: "ArrowDown",
      symbol: "↓"
		},
    {
			letter: "ArrowLeft",
      symbol: "←"
		},
    {
			letter: "ArrowRight",
      symbol: "→"
		},
    {
			letter: "Enter",
      symbol: "Start"
		},
	]);

	return (
    <section className="app">
      <Code />
      <div className="keyboard">
      {keys.map((key, i) => (
        <Keys key={i} letter={key.letter} symbol={key.symbol}/>
      ))}
      </div>
    </section>
	);
}

export default App;
