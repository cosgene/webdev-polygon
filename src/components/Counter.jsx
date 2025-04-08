import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../redux/actions';

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  return (
    <div>
      <h2>Counter</h2>
      <p>Value: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;