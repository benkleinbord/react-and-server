/**
 * Created by ben.kl on 4/7/2017.
 */

import catApi from '../apicatApi';
import * as types from './actionTypes';

export function loadCatsSuccess(cats){
  return {type:types.LOAD_CATS_SUCCESS,cats};
}

export function loadCats(){
  return function (dispatch){
    return catApi.getAllCats().then(cats=>{
      dispatch(loadCatsSuccess(cats));
    }).catch(error =>{
      throw (error);
    });
  };
}


