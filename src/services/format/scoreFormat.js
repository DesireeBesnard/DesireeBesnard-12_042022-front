/**
 * Formats data for TodayScore component
 * @param { number } data 
 * @returns { array }
 */
 export const formatScore = data => {
    let formatData = []
    let datum = {data: data, fill:"#ff0000"}
    formatData.push(datum)
    formatData.push({data: 1, fill:"#fbfbfb"})

    return formatData
}

