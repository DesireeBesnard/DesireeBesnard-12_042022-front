import React, {useState} from "react";
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Profil from './pages/Profil';
import Settings from './pages/Settings';
import Community from './pages/Community';
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import axios from 'axios'

function App() {

    const [data, setData] = useState([]);

    return (
        <div className="App"> 
            <NavBar/>
            <SideBar/>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/profil" element={<Profil />}/>
                <Route path="/settings" element={<Settings />}/>
                <Route path="/community" element={<Community />}/>
            </Routes>
        </div>
    )
}

export default App