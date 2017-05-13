/**
 * Created by ben.kl on 4/6/2017.
 */


import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import {loadCats} from './actions/catActions';
import {loadHobbies} from './actions/hobbyAction';

const store = configureStore();
store.dispatch(loadCats());
store.dispatch(loadHobbies());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById("app")
);


