import axios from 'axios'
import { formatScore, formatActivity, formatKeyData } from '../../services/format.js'


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
        //console.log(response.data)
        const userResponse = response.data.data.userInfos
        const scoreResponse = formatScore(response.data.data.todayScore)
        const keyDataResponse = formatKeyData(response.data.data.keyData)

        const responses = []
        responses.push(userResponse, scoreResponse, keyDataResponse)

        return responses;
        
    } catch (error) {
        if( error.response.status === 404) {
            window.location.href = "/error"
        }
        return [];
    }
}

/**
 * @description Send request to get today's goal completion using axios api (a changer)
 * @param { string } id - user id
 * @return { Promise }
 * @return { Promise.resolve< object > } response.data
 * @return { Promise.reject< array > } []
 */
 export async function getTodayScore(id) {

    try {
        const response = await axios.get(`http://localhost:3000/user/${id}`);
        //console.log(response.data)
        const formatResponse = formatScore(response.data.data.todayScore)
        console.log(formatResponse)
        return formatResponse;
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
        const response = await axios.get(`http://localhost:3000/user/${id}`);
        const formatResponse = formatKeyData(response.data.data.keyData)
        return formatResponse;
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
        const formatResponse = formatActivity(response.data.data.sessions)
        return formatResponse;
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
 * @description Send request to get activity types using axios api
 * @param { string } id - user id
 * @return { Promise }
 * @return { Promise.resolve< object > } response.data
 * @return { Promise.reject< array > } []
 */
export async function getUserActivities(id) {

    try {
        const response = await axios.get(`http://localhost:3000/user/${id}/performance`);
        //console.log('response  ', response.data)
        return response.data;
    } catch (error) {
        if( error.response.status === 404) {
            window.location.href = "/error"
        }
        return [];
    }
}
