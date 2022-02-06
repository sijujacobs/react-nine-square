import React, { useContext } from "react";
import { AppContext } from "../App";
import withNewFetch from "./hoc/withNewFetch";


const InputOne = (props) => {
  console.log('props : ', props);

  const { state, dispatch } = useContext(AppContext);
  const inputChangeHandler = (e) => {
    const { value } = e.target;
    dispatch({
      type: 'UPDATE',
      payload: value
    });

  }

  return (
    <React.Fragment>
      <h2>Input One</h2>
      <input value={state.inputData} onChange={inputChangeHandler} />
    </React.Fragment>
  );
}

const InputOneWithFetch = withNewFetch(InputOne, 'https://jsonplaceholder.typicode.com/users')

export default InputOneWithFetch;