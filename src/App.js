import React, { useEffect, useReducer } from "react";
import InputTwo from './components/InputTwo';
import FruitList from "./components/FruitList";
import ToDoList from "./components/ToDoList";
import LoginForm from "./components/LoginForm";

export const AppContext = React.createContext();
const initialState = {
  initialData: '',
  users: [],
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      const users = [...state.fruits, action.payload];
      return { ...state, users };
    case 'EDIT':
      const thisUserIndex = users.findIndex(f => f.id === action.payload.id);
      const usersClone = [...users];
      usersClone.splice(thisUserIndex, 0, action.payload)
      return { ...initialState, users: usersClone };
    case 'DELETE':
      const theseUsers = users.find(f => f.id !== action.payload.id);
      return { ...initialState, users: theseUsers };
    case 'UPDATE':
      return initialState;
    case 'FETCH':
      return { ...initialState, users: action.payload };
    default:
      return initialState;
  }
}


const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState);
  const inputRef = React.createRef();
  useEffect(() => {
    inputRef.current.focus();
  }, [inputRef]);
  const items = [
    { text: 'Buy Grocery', done: true },
    { text: 'Play Guitar', done: false },
    { text: 'Family dinner', done: false },
  ]

  return (
    <React.Fragment>
      <h1>Hello World</h1>
      <AppContext.Provider value={{ state, dispatch }}>
        <ToDoList items={items} onItemClick={(item, event) => { console.log(item, event) }} />
        <InputTwo />
        <LoginForm ref={inputRef} />
        <FruitList />
      </AppContext.Provider>
    </React.Fragment>
  );
}

export default App;