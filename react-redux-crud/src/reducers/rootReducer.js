/**
 * Created by ben.kl on 4/7/2017.
 */

import {combineReducers} from 'redux';
import cats from './catReducer';
import hobbies from './hobbyReducer';
const rootReducer = combineReducers({
  cats,
  hobbies
});

export default rootReducer;
