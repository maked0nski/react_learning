import {Routes, Route, Navigate} from 'react-router-dom'

import './App.css';
import {EpisodeDetailsPage, EpisodePage} from "./Pages";
import {Layout} from "./components";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>

                <Route index element={<Navigate to={'episode'}/>}/>

                <Route path={'episode'} element={<EpisodePage/>}/>
                <Route path={'episode/:id'} element={<EpisodeDetailsPage/>}/>

            </Route>
        </Routes>
    );
}

export default App;
