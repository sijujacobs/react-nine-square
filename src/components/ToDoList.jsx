import React from "react";
import ToDoItem from './ToDoItem';
import '../css/App.css'
class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      color: 'black'
    }
  }

  counterClicHandler(e) {
    // console.log('ToDoList ::  counterClicHandler : ', e);
    console.log('1. ToDoList ::  counterClicHandler : count ', this.state.count);
    this.setState((prevState, props) => {
      console.log('1.1 ToDoList ::  counterClicHandler : prevState ', prevState);
      // console.log('1.2 ToDoList ::  counterClicHandler : props ', props);
      return {
        count: ++prevState.count,
        color: prevState.color === 'black' ? 'red' : 'black',
      }
    });

    console.log('2. ToDoList ::  counterClicHandler : count ', this.state.count);
  }
  itemClickHandler(item, event) {
    console.log('ToDoList ::  itemClickHandler : ', item);
    console.log('ToDoList ::  itemClickHandler : event : ', event);
    console.log('ToDoList ::  itemClickHandler : state : ', this.state);
  }

  render() {
    return (<ul>
      {
        this.props.items && this.props.items.map((item, iIndex) => (
          <ToDoItem key={iIndex} item={item} onClick={this.itemClickHandler.bind(this, item)} />
        ))
      }
      <button onClick={this.counterClicHandler.bind(this)}>Counter</button>
      <div className={`testDiv ${this.state.color}`}> test color </div>
    </ul>);
  }

}

export default ToDoList;