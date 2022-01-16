import {useState} from "react";

import './App.css';
import Form from "./components/Form/Form";
import Cars from "./components/Cars/Cars";
import EditForm from "./components/EditForm/EditForm";


function App() {
    const [carItem, setCarItem] = useState(null);

    const editCar = (car) => {
        setCarItem(car)
        console.log(car);

    }

    return (
        <>
            <Form/>
            {carItem && <EditForm carItem={carItem}/>}
            <Cars editCar={editCar}/>
        </>
    );
}

export default App;
