import PropTypes from 'prop-types';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import { ScoreCustomLegend } from '../../services/format'
import './style.css'


/**
 * Returns goal score in the form of a radial bar chart
 * @param { object } props 
 * @property { array } props.data - value of nutrient as integer
 * @property { boolean } props.loading - loading status
 * @returns { HTMLElement }
 */
function Score(props) {

    let data


    if (props.loading === false) {
        data = props.data
    }


    return (
        <ResponsiveContainer width="32%" height="100%" className="score">
            <RadialBarChart 
                cx="50%" 
                cy="50%" 
                innerRadius="80%" 
                outerRadius="100%" 
                barSize={10} 
                data={data}
                startAngle={90} 
                endAngle={450}>

                <RadialBar
                    minAngle={15}
                    dataKey="data"
                    legendType="none"
                    startAngle={0} 
                    endAngle={360}
                    cornerRadius={5}/>

                <Legend 
                    iconSize={10} 
                    verticalAlign="middle"  
                    align="right" 
                    content={ScoreCustomLegend} />
                    
            </RadialBarChart>
        </ResponsiveContainer>
    )
}

Score.propTypes = {
    data: PropTypes.array,
    loading: PropTypes.bool
}

export default Score