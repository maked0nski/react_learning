import {useReducer} from "react";

import './App.css';
import {All, Form, ToDoList} from "./component";


function App() {

    const reducer = (state, action) => {
        switch (action.type) {
            case 'ADD_TODO':
                return {
                    ...state,
                    todo: [...state.todo, {id: new Date().getTime(), task: action.payload.task, status: false}]
                }

            case 'DEL_TODO':
                // debugger
                // let indexDEL = state.todo.findIndex(value => value.id === action.payload.id)
                // console.log(indexDEL)
                // console.log(action.payload.id)
                // console.log(state.todo.splice(state.todo.findIndex(value => value.id === action.payload.id), 1))
                //
                // return {
                //     ...state, todo: [todo.splice(state.todo.findIndex(value => value.id === action.payload.id), 1)]
                // }

                return {
                    ...state, todo:state.todo.filter(value => value.id !== action.payload.id)                }


            case 'CHECKED_TODO':
                let indexCHECKED = state.todo.findIndex(value => value.id === action.payload.id)
                state.todo.splice(indexCHECKED, 1, action.payload)
                return {...state}
        }
    }

    const [state, dispatch] = useReducer(reducer, {todo: []});

    // console.log(state)
    const {todo} = state;

    return (
        <>
            <div>
                <All todo={todo}/>
            </div>
            <Form dispatch={dispatch}/>
            <ToDoList todo={todo} dispatch={dispatch}/>

        </>
    );
}

export default App;
