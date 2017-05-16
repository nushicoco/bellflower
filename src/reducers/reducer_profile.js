/**
 * Created by einavcarmon on 09/04/2017.
 */
import { FETCH_PROFILE } from '../actions/index'

export default function  (store = {}, action) {
    switch (action.type) {
        case FETCH_PROFILE:
            return action.payload.data;
        default:
            return store;
    }
}