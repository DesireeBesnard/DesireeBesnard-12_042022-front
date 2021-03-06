import PropTypes from 'prop-types'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import './style.css'


/**
 * Returns type of activity by radar chart
 * @param { object } props 
 * @property { array } props.data 
 * @property { boolean } props.loading - loading status
 * @returns { HTMLElement }
 */
function Activities(props) {

    let data

    
    if (props.loading === false) {
        data = props.data
    }


    return (
        <ResponsiveContainer 
            className="activities"
            width="32%" 
            height='100%'
            aspect={1.3}>

            <RadarChart 
                cx="50%" 
                cy="50%" 
                outerRadius="50%" 
                data={data}>

                <PolarGrid  />

                <PolarRadiusAxis  
                    axisLine={false} 
                    tick={false} />

                <PolarAngleAxis 
                    dataKey="kind" 
                    tick={{ fill: 'white', fontSize: '12px' }}/>

                <Radar 
                    name="Performance" 
                    dataKey="value" 
                    fill="#ff0000" 
                    fillOpacity={0.6} />
                    
            </RadarChart>
        </ResponsiveContainer>
    )
}


Activities.propTypes = {
    data: PropTypes.array,
    loading: PropTypes.bool
}


export default Activities