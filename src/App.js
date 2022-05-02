import React from "react";
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Profil from './pages/Profil';
import Settings from './pages/Settings';
import Community from './pages/Community';
import NavBar from './components/NavBar'

function App() {

    return (
        <div className="App"> 
            <NavBar/>
            <Routes>
                <Route exact path="/" />
                <Route exact path="/user/:id" element={<Home />} />
                <Route path="/profil" element={<Profil />}/>
                <Route path="/settings" element={<Settings />}/>
                <Route path="/community" element={<Community />}/>
            </Routes>
        </div>
    )
}


export default App