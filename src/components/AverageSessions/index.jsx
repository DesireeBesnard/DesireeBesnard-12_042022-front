import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';


function AverageSessions(props) {


  function CustomTooltip({active, payload}) {
    if(active) {
      return (
        <div className='tooltip'>
            <p>{payload[0].payload.sessionLength}min</p>
        </div>
      )
    }
    return null
  }

  

  if (props.data.data) {

    let data = props.data.data.sessions
    const days = ["L", "M", "M", "J", "V", "S", "D"]

    for (let i = 0; i < data.length; i++) {
      const session = data[i]
      session.day = days[i]
    }

    return (
      <ResponsiveContainer width="50%" aspect={3}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis axisLine={false} tickLine={false} dataKey="day" />
          <Tooltip content={<CustomTooltip />} />
          <Line type="monotone" dataKey="sessionLength" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    )

  } else {
      return <div> Loading ...</div>
  }






}

export default AverageSessions