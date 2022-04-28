import '../../style/Home.css';
import DailyActivity from "../../components/BarChart"
import AverageSessions from "../../components/AverageSessions";
import Activities from "../../components/Activities"

function Home(props) {
  const mainData = props.mainData 
  const activity = props.activity
  const averageSessions = props.averageSessions
  const todayScore = props.todayScore
  const activities = props.activities
  const keyData = props.keyData

  
  const name = mainData.data.userInfos.firstName

    return (
      <div>
          <h1> Bonjour Bonjour {name}</h1>
          <DailyActivity data={activity} />
          <AverageSessions data={averageSessions} />
          <Activities data={activities} />
      </div>

    )




}

export default Home;
