/**
 * Formats data for DailyActivity component
 * @param { array } data 
 * @returns { object }
 */
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