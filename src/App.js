import {useState} from "react";

import './App.css';
import {Form, Items} from "./components";

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
                <Items cats={cats} getId={getId} word={'cat'}/>
                <Items cats={cats} getId={getId} word={'dog'}/>
            </div>
        </>
    );
}

export default App;
