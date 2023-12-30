import { useState } from 'react';
import './App.css';
import Counter from './Counter.js';

function App() {

  const [counter, setCounter] = useState(0);

  const incrementValue = () => {
    // setCounter(counter+1);

    //simple way 
    // let counterValue = counter + 1;
    // console.log(counterValue);

    setCounter((counter) => counter + 1);
    // setCounter((counter) => counter + 1); //this will make value increment by 2 because 2 it setCounter 2 times

  }

  return (
    <>
      <h1>Studywithme React pt.6</h1>

      <div>
        {/* {counter}
        <button onClick={incrementValue}>+</button> */}

        <Counter counter={counter} incrementValue={incrementValue}/>
      </div>
    </>
  );
}

export default App;
