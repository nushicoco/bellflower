/**
 * Created by einavcarmon on 09/04/2017.
 */
import axios from 'axios';
export const CHANGE_USERNAME = 'CHANGE_USERNAME'
export function changeUserName(userName = "Mighty1617") {
    return {
        type: CHANGE_USERNAME,
        payload: userName
    };
}

export const UPDATE_SEARCH_TERM = 'UPDATE_SEARCH_TERM';
export function updateSearchTerm(searchTerm = "") {
    return {
        type:UPDATE_SEARCH_TERM,
        payload: searchTerm
    };
}

export const GET_SEARCH_TERM = 'FETCH_SEARCH_TERM';
export function getSearchTerm() {
    let coco = {}
    return {
        type:GET_SEARCH_TERM,
        payload:coco
    };
}

// export const URL = '/users'
const PROFILE_URL = 'https://randomuser.me/api/';
export const FETCH_PROFILE = 'FETCH_PROFILE';
export function fetchProfile(profileEmail) {
    const request = axios.get(`${PROFILE_URL}?email=${profileEmail}`);
    return {
        type:FETCH_PROFILE,
        payload: request
    };
}

const SEARCH_URL = 'http://search.spoonflower.com/searchv2/designs';
export const FETCH_SEARCH = 'FETCH_SEARCH'
export function fetchSearch(searchParams) {
    const request = axios.get(`${SEARCH_URL}?${searchParams.payload}`);
    return {
        type:FETCH_SEARCH,
        payload: request
    };
}

