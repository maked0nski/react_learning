import React, {useEffect, useState} from 'react';

import css from './episodes.module.css'
import {episodesService} from "../../service/episodes.service";
import {Episode} from "../../components";

const EpisodePage = () => {
    const [numberPage, setNumberPage] = useState(null);

    const [state, setState] = useState({});

    useEffect(() => {
        if (numberPage){
            episodesService.getByNumberPage(numberPage).then(value => setState(value))
        } else {
            episodesService.getAll().then(value => setState(value))
        }
    }, [numberPage])


    const btnOnClick = (e) => {
        if(state.info[e.target.name]){
            setNumberPage(state.info[e.target.name].slice(-1))
        }
    }

    return (
        <div className={css.episodePage}>
            <div className={css.secondHeader}>
                Rick and Morty episodes!
            </div>
            <div className={css.episodePageContent}>
                {state.results && state.results.map(value => <Episode key={value.id} value={value} info={state.info}/>)}
            </div>
            <div className={css.episodePageButton}>
                <button name={'prev'} onClick={btnOnClick}>Prev</button>
                <button name={'next'} onClick={btnOnClick}>Next</button>
            </div>
        </div>
    );
};

export {EpisodePage};