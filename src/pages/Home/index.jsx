import '../../style/Home.css';
import SideBar from '../../components/SideBar'
import DailyActivity from "../../components/BarChart"
import AverageSessions from "../../components/AverageSessions";
import Activities from "../../components/Activities"
import Score from "../../components/Score"
import Nutrient from "../../components/Nutrients"

function Home(props) {

  if(props.keyData.data) {

    const mainData = props.mainData 
    const name = mainData.data.userInfos.firstName
    const activity = props.activity
    const averageSessions = props.averageSessions
    const todayScore = props.todayScore
    const activities = props.activities
    const calories = props.keyData.data.calorieCount
    const proteines = props.keyData.data.proteinCount
    const carbs = props.keyData.data.carbohydrateCount
    const lipid = props.keyData.data.lipidCount
    let greetings

    if(todayScore.data < 0.11) {
      greetings = 'Courage! Demain sera un jour meilleur'
    } else if(todayScore.data === 0.11) {
      greetings = 'Bravo! Vous êtes sur la bonne voie '
    } else if(todayScore.data > 0.11) {
      greetings = 'Félicitation! Vous avez explosé vos objectifs hier'
    }

    return (
      <div className='dashboard'>
        <SideBar/>
        <div className='dashboardContent'>
          <h1>Bonjour <span className='name'>{name}</span></h1>
          <p>{greetings}</p>
          <div className='innerContent'>
            <div>
              <div>
                <DailyActivity data={activity} />
              </div>
              <div>
                <AverageSessions data={averageSessions} />
                <Activities data={activities} />
                <Score data={todayScore} />
              </div>
            </div>
            <div className='nutrients'>
              <Nutrient src="calories-icon.png" data={calories} measure="kCal" nutrient="Calories" />
              <Nutrient src="protein-icon.png" data={proteines} measure="g" nutrient="Proteines" />
              <Nutrient src="carbs-icon.png" data={carbs} measure="g" nutrient="Glucides" />
              <Nutrient src="fat-icon.png" data={lipid} measure="g" nutrient="Lipides" />
            </div>
          </div>

        </div>
      </div>
    )

  } else {
    return <div> Loading ...</div>
  }




  







}

export default Home;
