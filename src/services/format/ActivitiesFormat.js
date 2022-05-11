/**
 * Formats data for Activities component
 * @param { object } data 
 * @returns { array }
 */
 export const formatActivities = data => {
    let dataArray = data.data
    for (let i = 0; i < dataArray.length; i++) {
      const activity = dataArray[i]
      activity.kind = data.kind[Object.keys(data.kind)[i]]  
    }
    return data.data
  }
  