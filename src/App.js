import {Cats, Form} from "./components";
import {useState} from "react";

import './App.css';

function App() {

    const [cats, setCats] = useState([]);

    const getFormData = (data) => {

        setCats([...cats, {id: new Date().getTime(), ...data}])

    }

    const getId = (id) => {
        setCats(cats.filter(cat => cat.id !== id))
    }

    return (
        <>
            <div className={'formBlock'}>
                <Form getFormData={getFormData} label={'cat'}/>
                <Form getFormData={getFormData} label={'dog'}/>
            </div>
            <div className={'block'}>
                <Cats cats={cats} getId={getId} word={'cat'}/>
                <Cats cats={cats} getId={getId} word={'dog'}/>
            </div>
        </>
    );
}

export default App;
