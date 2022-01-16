import {useState} from "react";
import {useForm} from "react-hook-form";

import './App.css';

import Form from "./components/Form/Form";
import Cars from "./components/Cars/Cars";

import {carService} from "./servises/car.service";

function App() {
    const {register, handleSubmit} = useForm();
    const [response, setResponse] = useState({});

    const onSubmit = (something) => {
        carService.create(something).then(value => value).catch(error=>{
            setResponse(error.response.data)
        })
    }

const editCar = (id) => {
    console.log(id)
}

    return (
        <>
            <Form register={register} handleSubmit={handleSubmit} response={response} onSubmit={onSubmit}/>
            <Cars editCar={editCar}/>
        </>
    );
}

export default App;
