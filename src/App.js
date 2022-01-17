import {useState} from "react";

import './App.css';
import Form from "./components/Form/Form";
import Cars from "./components/Cars/Cars";


function App() {
    const [carItem, setCarItem] = useState(null);

    const editCar = (car) => {
        setCarItem(car)
    }

    return (
        <>
            <Form carItem={carItem}/>
            {/*{carItem && <EditForm carItem={carItem}/>}*/}
            <Cars editCar={editCar}/>
        </>
    );
}

export default App;
