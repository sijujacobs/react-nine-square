const ToDoList = (props) => {
  return (<>
    <li onClick={props.onClick}>{props.item.text}</li>
  </>);
}

export default ToDoList;

// const TodoItem = props => <li onClick={props.onClick}>{props.item.text}</li>;
