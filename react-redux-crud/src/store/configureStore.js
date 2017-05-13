/**
 * Created by ben.kl on 4/7/2017.
 */

import {createStore, applyMiddleware} from 'redux';
import  rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';

export default function configureStore(){
  return createStore(
    rootReducer,
    applyMiddleware(thunk)
  );
}

