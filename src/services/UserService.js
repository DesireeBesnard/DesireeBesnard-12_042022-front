import axios from 'axios'


export async function getMainData(userId) {

    try{
        const response = await axios.get(`http://localhost:3000/user/${userId}`);
        console.log('response  ', response)
        return response.data;
    }catch(error) {
        return [];
    }
}

export async function getActivity(userId) {

    try{
        const response = await axios.get(`http://localhost:3000/user/${userId}/activity`);
        console.log('response  ', response)
        return response.data;
    }catch(error) {
        return [];
    }
}

export async function getAverageSessions(userId) {

    try{
        const response = await axios.get(`http://localhost:3000/user/${userId}/average-sessions`);
        console.log('response  ', response)
        return response.data;
    }catch(error) {
        return [];
    }
}

export async function getPerformance(userId) {

    try{
        const response = await axios.get(`http://localhost:3000/user/${userId}/performance`);
        console.log('response  ', response)
        return response.data;
    }catch(error) {
        return [];
    }
}
