import {Routes, Route} from 'react-router-dom'

import './App.css';
import {HomePage, Image} from "./pages";


function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<HomePage/>}>
                    <Route path={':keyword'} element={<Image/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
