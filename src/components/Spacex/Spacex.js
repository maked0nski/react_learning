import React from 'react';

const Spacex = (props) => {
    const {data: {mission_name, launch_year, links: {mission_patch_small}}} = props

    return (
        <div className={'element'}>
            <div className={'wrap'}>
                <h1>{mission_name}</h1>
                <p>{launch_year}</p>
            </div>
            <img src={mission_patch_small} alt={mission_name}/>
        </div>
    );
};

export default Spacex;