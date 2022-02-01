import './App.css';
import {Cats, Dogs, Form} from "./components";
import {useReducer} from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CAT':
            return {...state, cats: [...state.cats, {id: new Date().getTime(), name: action.payload.cat}]}
        case 'ADD_DOG':
            return {...state, dogs: [...state.dogs, {id: new Date().getTime(), name: action.payload.dog}]}
        case 'DEL_CAT':
            return {...state, cats: state.cats.filter(cat => cat.id !== action.payload.id)}
        case 'DEL_DOG':
            return {...state, dogs: state.dogs.filter(cat => dog.id !== action.payload.id)}
    }
}


function App() {

    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []});

    return (
        <>
            <Form dispatch={dispatch} />
            <div>
                <Cats/>
                <Dogs/>
            </div>
        </>
    );
}

export default App;
