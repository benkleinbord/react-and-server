/**
 * Created by ben.kl on 4/7/2017.
 */

class CatApi{
  static getAllCats(){
    return fetch('http://localhost:5000/api/v1/cats').then(response=>{
      return response.json();
    }).catch(error=>{
      return error
    });
  }
}

export default CatApi;


