import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from "../redux/counter"
import './Counter.css';

const Counter = () => {
	const { count } = useSelector((state) => state.counter);
    console.log(count)
	const dispatch = useDispatch()

   
	return (
		<div className="container">
			<div className="counter">
				<div className="console">
					<button
						className="btn"
						onClick={()=> dispatch(decrement())}>
						Reduce Number
					</button>
					Count is {count}
					<button
						className="btn"
						onClick={()=> dispatch(increment())}>
						Increase number
					</button>
				</div>
				<button
					className="reset btn"
					onClick={()=> dispatch(reset())}>
					Reset
				</button>
			</div>
		</div>
	);
};

export default Counter;
