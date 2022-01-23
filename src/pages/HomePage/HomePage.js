import React from 'react';
import {Link, Outlet} from 'react-router-dom';


const HomePage = () => {
    
    return (
        <div>
            <h1>Home Page</h1>
            <div><Link to={`/`}>
                <button>Home</button>
            </Link></div>
            <div><Link to={`/dog`}>
                <button>Dog</button>
            </Link></div>
            <div><Link to={'/cat'}>
                <button>Cat</button>
            </Link></div>
            <div><Link to={'/car'}>
                <button>Car</button>
            </Link></div>
            <div><Link to={'/girl'}>
                <button>Girl</button>
            </Link></div>
            <div><Link to={'/notebook'}>
                <button>Notebook</button>
            </Link></div>

            <Outlet/>

        </div>
    );
};

export {HomePage};