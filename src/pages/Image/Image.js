import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

const Image = () => {

    let {keyword} = useParams();

    const [image, setImage] = useState({link: `https://loremflickr.com/320/240/${keyword}?random=1}`});
    const [counter, setCounter] = useState({counter: 1});

    const click = (e) => {
        e.preventDefault();
        let temp = counter.counter + 1
        setCounter({counter: temp})
    }


    useEffect(() => {
        setImage({link: `https://loremflickr.com/320/240/${keyword}?random=${counter.counter}`})
    }, [counter, keyword])

    return (
        <div>

            <h2>Image</h2>
            <div><img src={image.link} alt={keyword}/></div>
            <form onClick={click}>
                <button>Search</button>
            </form>

        </div>
    );
};

export {Image};