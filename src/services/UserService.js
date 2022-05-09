import axios from 'axios'


/**
 * @description Send request to get general user information using axios api
 * @param { string } id - user id
 * @return { Promise }
 * @return { Promise.resolve< object > } response.data
 * @return { Promise.reject< array > } []
 */
export async function getMainData(id) {

    try {
        const response = await axios.get(`http://localhost:3000/user/${id}`);
        //console.log(response)
        return response.data;
    } catch (error) {
        if( error.response.status === 404) {
            window.location.href = "/error"
        }
        return [];
    }
}

/**
 * @description Send request to get daily activity data (weight and calories burned) using axios api
 * @param { string } id - user id
 * @return { Promise }
 * @return { Promise.resolve< object > } response.data
 * @return { Promise.reject< array > } []
 */
export async function getActivity(id) {

    try {
        const response = await axios.get(`http://localhost:3000/user/${id}/activity`);
        //console.log('activity  ', response.data)
        return response.data;
    } catch (error) {
        if( error.response.status === 404) {
            window.location.href = "/error"
        }
        return [];
    }
}

/**
 * @description Send request to get average session duration using axios api
 * @param { string } id - user id
 * @return { Promise }
 * @return { Promise.resolve< object > } response.data
 * @return { Promise.reject< array > } []
 */
export async function getAverageSessions(id) {

    try {
        const response = await axios.get(`http://localhost:3000/user/${id}/average-sessions`);
        //console.log('response  ', response.data)
        return response.data;
    } catch (error) {
        if( error.response.status === 404) {
            window.location.href = "/error"
        }
        return [];
    }
}

/**
 * @description Send request to get today's goal completion using axios api
 * @param { string } id - user id
 * @return { Promise }
 * @return { Promise.resolve< object > } response.data
 * @return { Promise.reject< array > } []
 */
export async function getTodayScore(id) {

    try {
        const response = await axios.get(`http://localhost:3000/user/${id}/today-score`);
        //console.log('response  ', response.data)
        return response.data;
    } catch (error) {
        if( error.response.status === 404) {
            window.location.href = "/error"
        }
        return [];
    }
}

/**
 * @description Send request to get activity types using axios api
 * @param { string } id - user id
 * @return { Promise }
 * @return { Promise.resolve< object > } response.data
 * @return { Promise.reject< array > } []
 */
export async function getUserActivities(id) {

    try {
        const response = await axios.get(`http://localhost:3000/user/${id}/activities`);
        //console.log('response  ', response.data)
        return response.data;
    } catch (error) {
        if( error.response.status === 404) {
            window.location.href = "/error"
        }
        return [];
    }
}

/**
 * @description Send request to get calories, proteins, carbohydrates and fats infos using axios api
 * @param { string } id - user id
 * @return { Promise }
 * @return { Promise.resolve< object > } response.data
 * @return { Promise.reject< array > } []
 */
export async function getKeyData(id) {

    try {
        const response = await axios.get(`http://localhost:3000/user/${id}/key-data`);
        console.log('response  ', response.data)
        return response.data;
    } catch (error) {
        if( error.response.status === 404) {
            window.location.href = "/error"
        }
        return [];
    }
}
