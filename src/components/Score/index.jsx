import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import '../../style/Score.css'

function Score(props) {

    let data

    function CustomLegend(props) {
        const {payload} = props
        return(
          <div className='scoreLegend'>
            <p>Score</p>
            <p><span>{payload[0].payload.value*100}%</span><br/>de votre <br/> objectif</p>
          </div>
        )
      }
    

    
    if(props.loading === false) {
        data = [props.data]
    }

    data[0].fill = "#ff0000"   
    const denominator = {data: 1, fill:"#fbfbfb"}
    data.push(denominator)


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
                endAngle={450}
            >
            <RadialBar
                minAngle={15}
                dataKey="data"
                legendType="none"
                startAngle={0} 
                endAngle={360}
                cornerRadius={5}
            />
            <Legend iconSize={10} verticalAlign="middle"  align="right" content={CustomLegend} />
            </RadialBarChart>
        </ResponsiveContainer>
    )
}

export default Score