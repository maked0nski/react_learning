import './App.css';
import Form from "./components/Form/Form";
import Cars from "./components/Cars/Cars";

function App() {
const editCar = (id) => {
    console.log(id)
}

    return (
        <>
            <Form/>
            <Cars editCar={editCar}/>
        </>
    );
}

export default App;
