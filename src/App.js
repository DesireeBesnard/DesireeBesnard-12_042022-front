import React, {useState, useEffect} from "react";
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Profil from './pages/Profil';
import Settings from './pages/Settings';
import Community from './pages/Community';
import NavBar from './components/NavBar'
import {getMainData, getActivity, getAverageSessions, getTodayScore, getUserActivities, getKeyData} from './services/UserService'


function App() {

    const url = window.location.href.split("/")
    const id = url[url.length -1]

    const [mainData, setMainData] = useState([])
    const [activity, setActivity] = useState([])
    const [averageSessions, setAverageSessions] = useState([])
    const [todayScore, setTodayScore] = useState([])
    const [activities, setActivities] = useState([])
    const [keyData, setKeyData] = useState([])


    useEffect(() => {
        getMainData(id)
            .then(response => {
                //console.log("main data", response)
                setMainData(response)
            })
            .catch((err) => console.log(err))
        
        getActivity(id)
            .then(response => {
                //console.log("activity", response)
                setActivity(response)
            })
            .catch((err) => console.log(err))
    
        getAverageSessions(id)
            .then(response => {
                //console.log("average sessions", response)
                setAverageSessions(response)
            })
            .catch((err) => console.log(err))
        
        getTodayScore(id)
            .then(response => {
                //console.log("today Score", response)
                setTodayScore(response)
            })
            .catch((err) => console.log(err))

        getUserActivities(id)
            .then(response => {
                //console.log("activities", response)
                setActivities(response)
            })
            .catch((err) => console.log(err))

        getKeyData(id)
            .then(response => {
                console.log("keyData", response)
                setKeyData(response)
            })
            .catch((err) => console.log(err))
        

    }, [id])

    if(((mainData.length) === 0)&&(averageSessions.length === 0)) { 
        return <div> Loading ...</div>
    } else {
        return (
            <div className="App"> 
                <NavBar/>
                <Routes>
                    <Route exact path="/" element={<Home mainData={mainData} activity={activity} averageSessions={averageSessions} todayScore={todayScore} activities={activities} keyData = {keyData}/>} />
                    <Route exact path="/:id" element={<Home mainData={mainData} activity={activity} averageSessions={averageSessions} todayScore={todayScore} activities={activities} keyData = {keyData}/>} />
                    <Route path="/profil" element={<Profil />}/>
                    <Route path="/settings" element={<Settings />}/>
                    <Route path="/community" element={<Community />}/>
                </Routes>
            </div>
        )
    }


}

export default App