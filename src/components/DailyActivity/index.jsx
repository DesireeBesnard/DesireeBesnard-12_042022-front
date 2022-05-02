import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import '../../style/DailyActivity.css'

function DailyActivity(props) {

  let data


  function CustomTooltip({ active, payload }) {
    if (active) {
      return (
        <div className='tooltip dialyActTooltip'>
          <p>{payload[0].payload.kilogram}kg</p>
          <p>{payload[0].payload.calories}Kcal</p>
        </div>
      )
    }
    return null
  }

  function CustomizedCursor({active, payload}) {
    if(active) {
      return (
        <div className="customCursor"></div>
      )
    }
  }


  if (props.loading === false) {
    data = props.data.data
  }

  for (let i = 0; i < data.length; i++) {
    const day = data[i]
    day.day = `${i+1}` 
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={300}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={7}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="day" tickSize={6} tick={{stroke: '#9b9eac', strokeWidth: 1, marginTop: '10px'}}/>
        <YAxis orientation="right" />
        <Tooltip content={<CustomTooltip />}  cursor={{ fill: 'rgba(196,196,196,0.5'}}/>
        <Legend verticalAlign="top" align="right" iconType="circle" iconSize={8} />
        <Bar name="Poids (kg)" dataKey="kilogram" fill="#000000" radius={[10, 10, 0, 0]} />
        <Bar name="Calories brûlées (kCal)" dataKey="calories" fill="#FF0000" radius={[10, 10, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default DailyActivity