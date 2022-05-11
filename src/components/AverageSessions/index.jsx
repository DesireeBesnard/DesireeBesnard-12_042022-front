import PropTypes from 'prop-types'
import { AverageSessionsCustomLegend, AverageSessionsCustomTooltip } from '../../services/format'
import { LineChart, Line, XAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './style.css'


/**
 * Returns average session duration as a line chart
 * @param { object } props 
 * @property { array } props.data 
 * @property { boolean } props.loading - loading status
 * @returns { HTMLElement }
 */
function AverageSessions(props) {

  console.log(props)

  let data

  if (props.loading === false) {
    data = props.data
  }

  return (
    <ResponsiveContainer 
      width="32%" 
      height="100%" 
      className="averageSession">

      <LineChart
        width="100%"
        height="100%"
        data={data}
        margin={{ top: 0, right: 15, left: 15, bottom: 40 }}>

        <XAxis
          axisLine={false}
          dataKey="day"
          tick={{ fill: 'rgba(255,255,255,0.7)', fontSize: '12px' }}
          tickLine={false}
          tickMargin={30}/>

        <Tooltip 
          content={<AverageSessionsCustomTooltip />} 
          cursor={false} />

        <Legend 
          verticalAlign="top" 
          align="left" content={<AverageSessionsCustomLegend />} />

        <Line 
          type="monotone" 
          dataKey="sessionLength" 
          stroke="#ffffff" 
          strokeWidth={2} 
          dot={false} 
          activeDot={{ r: 6 }} />
          
      </LineChart>
    </ResponsiveContainer>
  )
}


AverageSessions.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool
}

export default AverageSessions