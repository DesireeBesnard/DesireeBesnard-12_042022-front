import { LineChart, Line, XAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import '../../style/Home.css';
import '../../style/AverageSessions.css'

function AverageSessions(props) {

  let data
  const days = ["L", "M", "M", "J", "V", "S", "D"]


  function CustomTooltip({ active, payload }) {
    if (active) {
      return (
        <div className='tooltip averageSessTooltip'>
          <p>{payload[0].payload.sessionLength}min</p>
        </div>
      )
    }
    return null
  }

  function CustomLegend() {

    return(
      <div className='averageSessLegend'>
        <p>Durée moyenne des <br/>sessions</p>
      </div>
    )
  }


  if (props.loading === false) {
    data = props.data.data.sessions
  }

  for (let i = 0; i < data.length; i++) {
    const session = data[i]
    session.day = days[i]
  }

  return (
    <ResponsiveContainer width="32%" height="100%" className="averageSession">
      <LineChart
        width="100%"
        height="100%"
        data={data}
        margin={{
          top: 0,
          right: 15,
          left: 15,
          bottom: 40,
        }}
      >
        <XAxis axisLine={false} dataKey="day" tick={{fill: 'rgba(255,255,255,0.7)', fontSize:'12px'}} tickLine={false} tickMargin={30}/>
        <Tooltip content={<CustomTooltip />} cursor={false} />
        <Legend verticalAlign="top" align="left" content={CustomLegend} />
        <Line type="monotone" dataKey="sessionLength" stroke="#ffffff" strokeWidth= {2} dot={false} activeDot={{ r: 6 }} />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default AverageSessions