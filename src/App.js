import {useEffect, useState} from "react";

import './App.css';
import {userService} from "./services/user.service";
import Form from "./components/Forma/Forma";
import Users from "./components/Users/Users";

function App() {

    const [users, setUsers] = useState([]);
    const [filtredArr, setFiltredArr] = useState([])

    useEffect(() => {
        userService.getAll()
            .then(value => {
                setUsers([...value])
                setFiltredArr([...value])
            })
    }, [])

    const filterArr = (arr) => {
        let newArr = [...users];

        if (arr.name) {
            newArr = newArr.filter(value => value.name.toLowerCase().includes(arr.name.toLowerCase()))
        }
        if (arr.username) {
            newArr = newArr.filter(value => value.username.toLowerCase().includes(arr.username.toLowerCase()))
        }
        if (arr.email) {
            newArr = newArr.filter(value => value.email.toLowerCase().includes(arr.email.toLowerCase()))
        }
        setFiltredArr(newArr)

    }

    return (
        <>
            <Form filterArr={filterArr}/>
            <h2>User list</h2>
            {filtredArr.map(value => <Users key={value.id} users={value}/>)}
        </>
    );
}

export default App;
