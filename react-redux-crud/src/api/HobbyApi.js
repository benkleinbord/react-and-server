/**
 * Created by ben.kl on 4/8/2017.
 */

class HobbyApi{
  static getAllHobbies(){
    return fetch('http://localhost:5000/api/v1/hobbies').then(response => {
      return response.json();
    }).catch(error=>{
      return error;
    });
  }
}

export default HobbyApi;
