import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

function Activities(props) {

    let data

    
    if (props.loading === false) {
        data = props.data.data.data
    }

    for (let i = 0; i < data.length; i++) {
        const activity = data[i]
        activity.kind = props.data.data.kind[Object.keys(props.data.data.kind)[i]]
        
    }

    return (
        <ResponsiveContainer width="33%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="kind" />
            <PolarRadiusAxis />
            <Radar name="Performance" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            </RadarChart>
        </ResponsiveContainer>
    )
}

export default Activities