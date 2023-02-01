import "./App.css";
import { useState } from "react";

/*updating of our data/state will change the data/state but it wont show on screen because react will only re render the component when we update the data/state using setState
 */

function App() {
  // var counter = 0;
  const [counter, setCounter] = useState(0);
  /*
  useState hook returns an array of size 2
  [1st elt,2nd elt]
  Array destructuring

  the 1st element is the state/data variable
  the 2nd element is the function which we use to update the state->

  NOTE:- 
    we can still update/change the state/data without the setState function
    but it wont cause re-render so chnage wont get displayed on screen
    but if we use setState fn then it would cause rerender of component and we will be able to see the change.
  */

  function clickHandler() {
    // console.log(counter, "<--counter");

    // counter = counter + 1; // this wont caues rerender
    setCounter(counter + 1); //but his would

    // console.log(counter, "<--counter after click");
  }
  function clickHandler2() {
    setCounter(counter - 1);
  }
  return (
    <div className="App">
      <button onClick={clickHandler}>Increment counter</button>
      <button onClick={clickHandler2}>Decrement counter</button>
      <p>{counter}</p>
    </div>
  );
}

export default App;
