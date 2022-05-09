import React from "react";
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Help from './pages/Help'
import Home from './pages/Home';
import Meditation from '../src/components/Meditation'
import Swimming from '../src/components/Swimming'
import Cycling from '../src/components/Cycling'
import Bodybuilding from '../src/components/Bodybuilding'
import Profil from './pages/Profil';
import Settings from './pages/Settings';
import Community from './pages/Community';
import Error404 from "./pages/404";


function App() {

    return (
        <div className="App"> 
            <NavBar/>
            <Routes>
                <Route exact path="/" element={<Help />}/>
                <Route exact path="/user/:id" element={<Home />} />
                <Route exact path="/user/:id/activities/yoga" element={<Meditation />} />
                <Route exact path="/user/:id/activities/swimming" element={<Swimming />} />
                <Route exact path="/user/:id/activities/cycling" element={<Cycling />} />
                <Route exact path="/user/:id/activities/bodybuilding" element={<Bodybuilding />} />
                <Route path="/user/profil" element={<Profil />}/>
                <Route path="/user/settings" element={<Settings />}/>
                <Route path="/user/community" element={<Community />}/>
                <Route path='*' element={<Error404 />}/>
            </Routes>
        </div>
    )
}


export default App