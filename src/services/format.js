

export const formatScore = (data) => {
    let formatData = []
    let datum = {data: data, fill:"#ff0000"}
    formatData.push(datum)
    formatData.push({data: 1, fill:"#fbfbfb"})

    return formatData
}

export const ScoreCustomLegend = (props) => {
    const {payload} = props
    return(
      <div className='scoreLegend'>
        <p>Score</p>
        <p><span>{payload[0].payload.value*100}%</span><br/>de votre <br/> objectif</p>
      </div>
    )
}


