import {useState} from "react";

import './App.css';
import Form from "./components/Form/Form";
import Cars from "./components/Cars/Cars";


function App() {
    const [editCar, setEditCar] = useState(null);

    const [trigger, setTrigger] = useState(null);

    console.log(trigger)
    return (
        <>
            <Form editCar={editCar} update={setTrigger}/>
            <Cars editCar={setEditCar} trigger={trigger}/>
        </>
    );
}

export default App;
