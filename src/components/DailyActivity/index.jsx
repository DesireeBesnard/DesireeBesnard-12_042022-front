import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function DailyActivity(props) {

  let data


  function CustomTooltip({ active, payload }) {
    if (active) {
      return (
        <div className='tooltip'>
          <p>{payload[0].payload.kilogram}kg</p>
          <p>{payload[0].payload.calories}Kcal</p>
        </div>
      )
    }
    return null
  }


  if (props.loading === false) {
    data = props.data.data
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
        barCategoryGap={60}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="day" />
        <YAxis orientation="right" />
        <Tooltip content={<CustomTooltip />} />
        <Legend verticalAlign="top" align="right" iconType="circle" iconSize={8} />
        <Bar name="Poids (kg)" dataKey="kilogram" fill="#000000" radius={[10, 10, 0, 0]} />
        <Bar name="Calories brûlées (kCal)" dataKey="calories" fill="#FF0000" radius={[10, 10, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default DailyActivity