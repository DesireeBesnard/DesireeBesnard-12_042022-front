import '../../style/Home.css';
import DailyActivity from "../../components/BarChart"

function Home(props) {
  const mainData = props.mainData 
  const activity = props.activity
  const averageSessions = props.averageSessions
  const todayScore = props.todayScore
  const activities = props.activities
  const keyData = props.keyData

  
  const name = props.mainData.data.userInfos.firstName

    return (
      <div>
          <h1> Bonjour Bonjour {name}</h1>
          <DailyActivity data={activity} />
      </div>

    )




}

export default Home;
