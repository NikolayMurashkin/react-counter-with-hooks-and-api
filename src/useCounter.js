import { useState, useEffect } from "react";


function useCounter(initial) {
	const [counter, setCounter] = useState(initial);

	useEffect(() => {
		fetch('https://www.random.org/integers/?num=1&min=-50&max=50&col=1&base=10&format=plain&rnd=new')
			.then(res => res.json())
			.then(res => setCounter(res))
			.catch(err => console.log(err))
	}, [])

	const resetCounter = () => {
		setCounter(initial)
	}

	const incCounter = () => {
		if (counter < 50) {
			setCounter(counter => counter + 1)
		}
	}

	const decCounter = () => {
		if (counter > -50) {
			setCounter(counter => counter - 1)
		}
	}

	const rndCounter = () => {
		setCounter(+(Math.random() * (50 - -50) + -50).toFixed(0))
	}

	return { resetCounter, incCounter, decCounter, rndCounter, setCounter, counter }
}

export default useCounter;