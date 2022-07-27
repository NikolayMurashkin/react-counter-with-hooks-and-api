import React from "react";
import './App.css';
import useCounterRandom from "./useCounter";


const Counter = (props) => {
	const counter = useCounterRandom(props.counter);


	const { incCounter, decCounter, rndCounter, resetCounter } = counter;

	return (
		<div className="component">
			<div className="counter">{counter.counter}</div>
			<div className="controls">
				<button onClick={incCounter}>INC</button>
				<button onClick={decCounter}>DEC</button>
				<button onClick={rndCounter}>RND</button>
				<button onClick={resetCounter}>RESET</button>
			</div>
		</div>
	)
}

const RndCounter = (props) => {
	const counter = useCounterRandom(props.counter);
	const { rndCounter, resetCounter } = counter;

	return (
		<div className="component">
			<div className="counter">{counter.counter}</div>
			<div className="controls">
				<button onClick={rndCounter}>RND</button>
				<button onClick={resetCounter}>RESET</button>
			</div>
		</div>
	)
}

const App = () => {
	return (
		<>
			<Counter counter={0} />
			<RndCounter counter={5} />
		</>
	)
}

export default App;
