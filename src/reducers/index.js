/**
 * Created by joseangelmr on 30/10/16.
 */
import { combineReducers } from 'redux';
import counter from './counter';

const rootReducer = combineReducers({
    counter
});

export default rootReducer;