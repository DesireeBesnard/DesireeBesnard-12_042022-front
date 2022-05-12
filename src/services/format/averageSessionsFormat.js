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
  