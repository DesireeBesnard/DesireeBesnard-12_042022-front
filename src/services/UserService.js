import axios from 'axios'


export async function getMainData(id) {

    try {
        const response = await axios.get(`http://localhost:3000/user/${id}`);
        //console.log('response  ', response)
        return response.data;
    } catch (error) {
        return [];
    }
}

export async function getActivity(id) {

    try {
        const response = await axios.get(`http://localhost:3000/user/${id}/activity`);
        //console.log('activity  ', response)
        return response.data;
    } catch (error) {
        return [];
    }
}

export async function getAverageSessions(id) {

    try {
        const response = await axios.get(`http://localhost:3000/user/${id}/average-sessions`);
        //console.log('response  ', response)
        return response.data;
    } catch (error) {
        return [];
    }
}

export async function getTodayScore(id) {

    try {
        const response = await axios.get(`http://localhost:3000/user/${id}/today-score`);
        //console.log('response  ', response)
        return response.data;
    } catch (error) {
        return [];
    }
}

export async function getUserActivities(id) {

    try {
        const response = await axios.get(`http://localhost:3000/user/${id}/activities`);
        //console.log('response  ', response)
        return response.data;
    } catch (error) {
        return [];
    }
}

export async function getKeyData(id) {

    try {
        const response = await axios.get(`http://localhost:3000/user/${id}/key-data`);
        //console.log('response  ', response)
        return response.data;
    } catch (error) {
        return [];
    }
}
