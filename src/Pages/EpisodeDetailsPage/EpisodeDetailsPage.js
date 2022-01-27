import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";


import css from './episodeDetailsPage.module.css'
import {episodesService} from "../../service/episodes.service";
import {Character} from "../../components";


const EpisodeDetailsPage = () => {

    const {pathname, state} = useLocation();

    const [details, setDetails] = useState();


    useEffect(()=>{
        if (state) {
            setDetails(state)
        } else {
            episodesService.getByPathname(pathname).then(value => setDetails(value))
        }
    },[])

    return (
        <div>
            <div className={css.episodeDetailsHeader}>
                <h3>{details?.name}</h3>
                <p><span>Episode: </span>{details?.episode}</p>
                <p><span>Air date: </span>{details?.air_date}</p>
            </div>
            <div className={css.episodeDetailsWrap}>
                {details?.characters && details.characters.map(value => <Character key={value.split('/')[5]}
                                                                                   value={value}/>)}
            </div>
        </div>
    );
};

export {EpisodeDetailsPage};