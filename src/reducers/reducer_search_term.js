/**
 * Created by einavcarmon on 09/04/2017.
 */
import { UPDATE_SEARCH_TERM, GET_SEARCH_TERM } from '../actions/index'

export default function  (store = {}, action) {
    switch (action.type) {
        case GET_SEARCH_TERM:
            action.payload = store.searchTerm;
            return store;
        case UPDATE_SEARCH_TERM:
            store.searchTerm = action.payload;
            return store;
        default:
            return store;
    }
}