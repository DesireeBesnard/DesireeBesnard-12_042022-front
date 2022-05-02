import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

function AverageSessions(props) {

  let data
  const days = ["L", "M", "M", "J", "V", "S", "D"]


  function CustomTooltip({ active, payload }) {
    if (active) {
      return (
        <div className='tooltip'>
          <p>{payload[0].payload.sessionLength}min</p>
        </div>
      )
    }
    return null
  }


  if (props.loading === false) {
    data = props.data.data.sessions
  }

  for (let i = 0; i < data.length; i++) {
    const session = data[i]
    session.day = days[i]
  }

  return (
    <ResponsiveContainer width="33%" height="100%">
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
        <XAxis axisLine={false} tickLine={false} dataKey="day" margin-top="50px" />
        <Tooltip content={<CustomTooltip />} />
        <Line type="monotone" dataKey="sessionLength" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default AverageSessions