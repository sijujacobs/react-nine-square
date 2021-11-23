const SquareContainer = (props) => {

    return (
      <div id="squareContainer">
          {props.numbers.map(number => {
            return (
              <div key={number} className='square'>{number}</div>
            )
          })}
      </div>
      );
    }
    
export default SquareContainer;