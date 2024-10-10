import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../state/store';
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
  reset,
} from '../state/counter/counterSlice';

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div>
      <h2 className="counter__value" onClick={() => dispatch(reset())}>
        {count}
      </h2>
      <div>
        <button className="btn" onClick={() => dispatch(increment())}>
          Increment (+1)
        </button>
        <button className="btn" onClick={() => dispatch(incrementAsync(10))}>
          Async increment (+10)
        </button>
        <button className="btn" onClick={() => dispatch(incrementByAmount(100))}>
          Increment by amount (+100)
        </button>
        <button className="btn" onClick={() => dispatch(decrement())}>
          Decrement (-1)
        </button>
      </div>
    </div>
  );
};

export default Counter;
