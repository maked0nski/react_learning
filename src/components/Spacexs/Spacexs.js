import React, {useEffect, useState} from 'react';

import Spacex from "../Spacex/Spacex";

const Spacexs = () => {

    const [arr_spacex, setArr_spacex] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => setArr_spacex(value.filter(item => item.launch_year !== '2020')))
    }, [])

    return (
        <div >
            {arr_spacex.map(value => <Spacex key={value.flight_number} data={value}/>)}
        </div>
    );
};

export default Spacexs;