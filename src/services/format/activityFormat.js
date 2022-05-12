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
