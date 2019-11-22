import React from 'react';
import { increase, decrease, increaseAsync } from "../modules/counter";
import { useDispatch, useSelector } from "react-redux";

const Test = () => {

  const dispatch = useDispatch();

  // const count = useSelector(state => state.count);
  // const count = useSelector(({ count }) => {
  //   count: count.count
  // });

  const onIncrease = () => {
    console.log('+');
    dispatch(increaseAsync);
  };

  const onDecrease = () => {
    console.log('-');
    dispatch(decrease);
  };

  return (
    <div>
      {/*<p>{count}</p>*/}
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  )
};

export default Test;
