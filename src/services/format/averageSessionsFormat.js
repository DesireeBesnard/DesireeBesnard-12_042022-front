/**
 * Formats data for AverageSession component
 * @param { array } data 
 * @returns { array }
 */
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