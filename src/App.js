import {useReducer} from "react"
import './App.css';

const reducer = (state, action) => {
    switch (action.type) {
        case 'inc1':
            return {...state, count1: state.count1++}
        case 'inc2':
            return {...state, count2: state.count2++}
        case 'inc3':
            return {...state, count3: state.count3++}
        case 'dec1':
            return {...state, count1: state.count1--}
        case 'dec2':
            return {...state, count2: state.count2--}
        case 'dec3':
            return {...state, count3: state.count3--}
        case 'res1':
            return {...state, count1: 0}
        case 'res2':
            return {...state, count2: 0}
        case 'res3':
            return {...state, count3: 0}
        default: return state
    }
}


function App() {

    const [state, dispatch] = useReducer(reducer, {count1: 0, count2: 0, count3: 0});

    return (
        <div>
            <div>
                <div>count1: {state.count1}</div>
                <button onClick={() => dispatch({type: 'inc1'})}>inc count1</button>
                <button onClick={() => dispatch({type: 'dec1'})}>dec count1</button>
                <button onClick={() => dispatch({type: 'res1'})}>res count1</button>
            </div>
            <div>
                <div>count1: {state.count2}</div>
                <button onClick={() => dispatch({type: 'inc2'})}>inc count2</button>
                <button onClick={() => dispatch({type: 'dec2'})}>dec count2</button>
                <button onClick={() => dispatch({type: 'res2'})}>res count2</button>
            </div>
            <div>
                <div>count1: {state.count3}</div>
                <button onClick={() => dispatch({type: 'inc3'})}>inc count3</button>
                <button onClick={() => dispatch({type: 'dec3'})}>dec count3</button>
                <button onClick={() => dispatch({type: 'res3'})}>res count3</button>
            </div>
        </div>

    );
}

export default App;
