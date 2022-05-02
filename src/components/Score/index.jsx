import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

function Score(props) {

    let data

    
    if(props.loading === false) {
        data = [props.data]
    }

    data[0].fill = "#ff0000"   
    const denominator = {data: 1, fill:"#fff"}
    data.push(denominator)


    return (
        <ResponsiveContainer width="33%" height="100%">
            <RadialBarChart cx="50%" cy="50%" innerRadius="80%" outerRadius="100%" barSize={10} data={data}>
            <RadialBar
                minAngle={15}
                dataKey="data"
                denominator = {1}
                legendType="none"
                startAngle={90} 
                endAngle={180}
            />
            <Legend iconSize={10} layout="vertical" verticalAlign="middle" />
            </RadialBarChart>
        </ResponsiveContainer>
    )
}

export default Score