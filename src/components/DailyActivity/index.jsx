import PropTypes from 'prop-types'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './style.css'


/**
 * Returns daily activity in the form of a BarChart
 * @param { object } props 
 * @property { object } props.data 
 * @property { boolean } props.loading - loading status
 * @returns { HTMLElement }
 */
function DailyActivity(props) {

  let data

  const ActivityCustomLegend = props => {
    const {payload} = props
    return(
      <div className='dailyAcLegend'>
        <p>Activité quotidienne</p>
        <ul>
          {
            payload.map((entry, index)=> (
              <li key={`item-${index}`}>{entry.value}</li>
            ))
          }
        </ul>
      </div>
    )
  }
  
  const ActivityCustomTooltip = ({ active, payload }) => {
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


  if (props.loading === false) {
    data = props.data.data
  }


  return (
    <ResponsiveContainer 
      width="100%" 
      height="100%" 
      borderRadius="5px">

      <BarChart
        width={'100%'}
        height={'100%'}
        data={data}
        margin={{ top: 40, right: 40, left: 40, bottom: 40}}
        barSize={7}
        barCategoryGap={150} >

        <CartesianGrid 
          stroke='#dedede' 
          strokeDasharray="3 3" 
          vertical={false} />

        <XAxis 
          dataKey="day" 
          stroke="#dedede" 
          tickSize={0} 
          tick={{fill: '#9b9eac'}} 
          tickMargin={20}/>

        <YAxis 
          axisLine={false} 
          orientation="right" 
          tickSize={0} 
          tick={{fill: '#9b9eac'}} 
          tickMargin={20}/>

        <Tooltip 
          content={< ActivityCustomTooltip />}  
          cursor={{ fill: 'rgba(196,196,196,0.5'}}/>

        <Legend 
          verticalAlign="top" 
          align="right" 
          iconType="circle" 
          iconSize={8} 
          content={< ActivityCustomLegend />} />

        <Bar 
          name="Poids (kg)" 
          dataKey="kilogram" 
          fill="#000000" 
          radius={[10, 10, 0, 0]} />

        <Bar 
          name="Calories brûlées (kCal)" 
          dataKey="calories" 
          fill="#FF0000" 
          radius={[10, 10, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

DailyActivity.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool
}

export default DailyActivity