import { combineReducers } from 'redux';
import ProfileReducer from '../reducers/reducer_profile';
import SearchReducer from '../reducers/reducer_search';
import SearchTermReducer from '../reducers/reducer_search_term';

const rootReducer = combineReducers({
    // state: (state = {}) => state
    profile: ProfileReducer,
    search: SearchReducer,
    searchTerm: SearchTermReducer
});

export default rootReducer;