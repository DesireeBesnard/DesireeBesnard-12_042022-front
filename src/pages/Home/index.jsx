import React, { useState, useEffect } from "react";
import { getMainData, getActivity, getAverageSessions, getTodayScore, getUserActivities, getKeyData } from '../../services/UserService'
import SideBar from '../../components/SideBar'
import DailyActivity from "../../components/DailyActivity"
import AverageSessions from "../../components/AverageSessions";
import Activities from "../../components/Activities"
import Score from "../../components/Score"
import Nutrient from "../../components/Nutrients"
import './style.css';

function Home() {

  const url = window.location.href.split("/")
  const id = url[url.length - 1]

  const [mainData, setMainData] = useState([])
  const [activity, setActivity] = useState([])
  const [averageSessions, setAverageSessions] = useState([])
  const [todayScore, setTodayScore] = useState([])
  const [activities, setActivities] = useState([])
  const [keyData, setKeyData] = useState([])
  const [onLoad, setLoading] = useState(true)

  let name
  let calories
  let proteines
  let carbs
  let lipid
  let greetings


  useEffect(() => {
    getMainData(id)
      .then(response => {
        setMainData(response)
      })
      .catch((err) => console.log(err))

    getActivity(id)
      .then(response => {
        setActivity(response)
      })
      .catch((err) => console.log(err))

    getAverageSessions(id)
      .then(response => {
        setAverageSessions(response)
      })
      .catch((err) => console.log(err))

    getTodayScore(id)
      .then(response => {
        setTodayScore(response)
      })
      .catch((err) => console.log(err))

    getUserActivities(id)
      .then(response => {
        setActivities(response)
      })
      .catch((err) => console.log(err))

    getKeyData(id)
      .then(response => {
        setKeyData(response)
        setLoading(false)
      })
      .catch((err) => console.log(err))

  }, [id])


  if (onLoad === true) {
    return <div> Loading ...</div>
  }
  if ((onLoad === false) && (!Object.keys(mainData))) {
    return <div> Erreur 505</div>
  }
  if ((onLoad === false) && (Object.keys(mainData))) {
    name = mainData.data.userInfos.firstName
    calories = keyData.data.calorieCount
    proteines = keyData.data.proteinCount
    carbs = keyData.data.carbohydrateCount
    lipid = keyData.data.lipidCount
  }


  if (todayScore.data < 0.11) {
    greetings = 'Courage! Demain sera un jour meilleur'
  } else if (todayScore.data === 0.11) {
    greetings = 'Bravo! Vous êtes sur la bonne voie '
  } else if (todayScore.data > 0.11) {
    greetings = 'Félicitation! Vous avez explosé vos objectifs hier 👏'
  }


  return (
    <div className='dashboard'>
      <SideBar />
      <div className='dashboardContent'>
        <h1>Bonjour <span className='name'>{name}</span></h1>
        <p>{greetings}</p>
        <div className='innerContent'>

          <div>
            <div className='dailyActivity'>
              <DailyActivity 
                data={activity} 
                loading={onLoad} 
              />
            </div>
            <div className='performance'>
              <AverageSessions 
                data={averageSessions} 
                loading={onLoad} 
              />
              <Activities 
                data={activities} 
                loading={onLoad} 
              />
              <Score 
                data={todayScore} 
                loading={onLoad} 
              />
            </div>
          </div>

          <div className='nutrients'>
            <Nutrient 
              src="calories-icon.png" 
              data={calories} 
              measure="kCal" 
              nutrient="Calories" 
              loading={onLoad} 
            />
            <Nutrient 
              src="protein-icon.png" 
              data={proteines} 
              measure="g" 
              nutrient="Proteines" 
              loading={onLoad} 
            />
            <Nutrient 
              src="carbs-icon.png" 
              data={carbs} 
              measure="g" 
              nutrient="Glucides" 
              loading={onLoad} 
            />
            <Nutrient 
              src="fat-icon.png" 
              data={lipid} 
              measure="g" 
              nutrient="Lipides" 
              loading={onLoad} 
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
