import axios from 'axios'
import {formatActivity} from '../../services/format/activityFormat'
import { formatAverageSessions } from '../../services/format/averageSessionsFormat'
import { formatActivities } from '../../services/format/ActivitiesFormat'
import { formatScore} from '../../services/format/scoreFormat'
import { formatKeyData } from '../../services/format/keyDataFormat'


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
        return formatActivity(response.data.data.sessions)
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
        //console.log( response.data)
        return formatAverageSessions(response.data.data.sessions);
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
        //console.log(response.data)
        return formatActivities(response.data.data);
    } catch (error) {
        if( error.response.status === 404) {
            window.location.href = "/error"
        }
        return [];
    }
}
