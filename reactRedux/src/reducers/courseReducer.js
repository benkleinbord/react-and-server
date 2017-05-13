/**
 * Created by ben.kl on 3/26/2017.
 */

export default function courseReducer(state = [], action){
  switch (action.type){
    case "CREATE_COURSE":
          return [...state,Object.assign({},action.course)];

    default:
          return state;
  }
}
