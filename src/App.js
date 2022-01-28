import './App.css';
import {useReducer} from "react"

const reduser = (state, action) => {
  console.log(action);
  console.log(state);
  return state

}

function App() {

  const [state, dispatch] = useReducer(reduser, {count1:0});


  return (
    <div>
<div>{state.count1}</div>
      <button onClick={click}>Click</button>
    </div>
  );
}

export default App;
