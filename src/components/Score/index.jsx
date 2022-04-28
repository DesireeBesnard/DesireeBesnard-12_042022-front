import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

function Score(props) {

    if(props.data.data) {
        const data = [props.data]
    
        console.log(data)


        return (
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={data}>
                <RadialBar
                    minAngle={15}
                    background
                    clockWise
                    dataKey="data"
                    denominator = {1}
                    legendType="none"
                />
                <Legend iconSize={10} layout="vertical" verticalAlign="middle" />
                </RadialBarChart>
            </ResponsiveContainer>
        )
    } else {
        return <div>Loading</div>
    }

    

}

export default Score