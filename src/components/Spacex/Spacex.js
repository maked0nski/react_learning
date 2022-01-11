import React from 'react';

const Spacex = (props) => {

    return (
        <div className={'element'}>
            <div className={'wrap'}>
                <h1>{props.data.mission_name}</h1>
                <p>{props.data.launch_year}</p>
            </div>
            <img src={props.data.links.mission_patch_small} alt={props.data.mission_name}/>
        </div>
    );
};

export default Spacex;