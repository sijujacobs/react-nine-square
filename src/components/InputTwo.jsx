import React, { useContext } from "react";
import { AppContext } from "../App";

const InputTwo = (props) => {
  const { state, dispatch } = useContext(AppContext);

  const inputChangeHandler = (e) => {
    const { value } = e.target;
    dispatch({
      type: 'UPDATE',
      payload: value,
    })
  }
  return (
    <React.Fragment>
      <h2>Input Two</h2>
      <input value={state.inputData} onChange={inputChangeHandler} />
    </React.Fragment>
  );
}

export default InputTwo;