/**
 * Created by ben.kl on 3/26/2017.
 */

import {combineReducers} from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
   courses
});

export default rootReducer;
