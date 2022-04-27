import React, {useState, useEffect} from "react";
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Profil from './pages/Profil';
import Settings from './pages/Settings';
import Community from './pages/Community';
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import {getMainData, getActivity, getAverageSessions, getPerformance} from './services/UserService'

function App() {

    const url = window.location.href.split("/")
    const userId = url[url.length -1]

    const [mainData, setMainData] = useState([])
    const [activity, setActivity] = useState([])
    const [averageSessions, setAverageSessions] = useState([])
    const [performance, setPerformance] = useState([])


    useEffect(() => {
        getMainData(userId)
            .then(response => {
                console.log(response)
                setMainData(response)
            })
            .catch((err) => console.log(err))
        
        getActivity(userId)
            .then(response => {
                console.log(response)
                setActivity(response)
            })
            .catch((err) => console.log(err))
    
        getAverageSessions(userId)
            .then(response => {
                console.log(response)
                setAverageSessions(response)
            })
            .catch((err) => console.log(err))

        getPerformance(userId)
            .then(response => {
                console.log(response)
                setPerformance(response)
            })
            .catch((err) => console.log(err))

    }, [userId])
    

    if(mainData.length === 0) { 
        return <div> Loading ...</div>
    } else {
        return (
            <div className="App"> 
                <NavBar/>
                <SideBar/>
                <Routes>
                    <Route exact path="/" element={<Home mainData={mainData} activity={activity} averageSessions={averageSessions} performance={performance}/>} />
                    <Route exact path="/:id" element={<Home mainData={mainData} activity={activity} averageSessions={averageSessions} performance={performance}/>} />
                    <Route path="/profil" element={<Profil />}/>
                    <Route path="/settings" element={<Settings />}/>
                    <Route path="/community" element={<Community />}/>
                </Routes>
            </div>
        )
    }


}

export default App