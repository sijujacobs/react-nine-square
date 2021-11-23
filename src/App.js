import { useState } from 'react';
import SquareContainer from './components/SquareContainer';
import { orderTypes } from './constants';

const App = () => {
  
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const buttonClickHandler = (event) => {
    const buttonClass = event.target.className.split(' ')[1];
    buttonClass && changetextContent(buttonClass);
  }

  const changetextContent = (orderType)  => {
    if(orderType === orderTypes.SHUFFLE) {
      numbers.sort((a, b) => 0.5 - Math.random());
    } else if (orderType === orderTypes.DESCEND) {
      numbers.sort((a, b) => b - a);
    } else {
      numbers.sort((a, b) => a - b);
    }
    setNumbers([...numbers]);
    console.log("changetextContent----> ", numbers);
  }
 
  return (
    <div className="App">
      <div id="mainContainer">
        <SquareContainer numbers={numbers} />
        <div id="actionContainer">
          <button className='button ascend' onClick={ buttonClickHandler }>Ascend</button>
          <button className='button descend' onClick={ buttonClickHandler }>Descend</button>
          <button className='button shuffle' onClick={ buttonClickHandler }>Shuffle</button>
        </div>
        <h3>ReactJS</h3>
      </div>
    </div>
  );
}

export default App;
