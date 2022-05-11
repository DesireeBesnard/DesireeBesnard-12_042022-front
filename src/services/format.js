
export const formatActivity = data => {
  let formatData = {}

  for (let i = 0; i < data.length; i++) {
      const day = data[i]
      day.day = `${i+1}` 
  }

  formatData.data = data
  return formatData
}

export const ActivityCustomLegend = props => {
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

export const ActivityCustomTooltip = ({ active, payload }) => {
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




export const formatAverageSessions = data => {
  const days = ["L", "M", "M", "J", "V", "S", "D"]

  for (let i = 0; i < data.length; i++) {
    const session = data[i]
    session.day = days[i]
  }

  return data
}

export const AverageSessionsCustomLegend = () => {
  return (
    <div className='averageSessLegend'>
      <p>Durée moyenne des <br />sessions</p>
    </div>
  )
}

export const AverageSessionsCustomTooltip = ({ active, payload }) => {
  if (active) {
    return (
      <div className='tooltip averageSessTooltip'>
        <p>{payload[0].payload.sessionLength}min</p>
      </div>
    )
  }
  return null
}






export const formatScore = data => {
    let formatData = []
    let datum = {data: data, fill:"#ff0000"}
    formatData.push(datum)
    formatData.push({data: 1, fill:"#fbfbfb"})

    return formatData
}

export const ScoreCustomLegend = props => {
    const {payload} = props
    return(
      <div className='scoreLegend'>
        <p>Score</p>
        <p><span>{payload[0].payload.value*100}%</span><br/>de votre <br/> objectif</p>
      </div>
    )
}









export const formatKeyData = (data) => {
    let formatData = {}
    formatData.data = data
    return formatData
}
