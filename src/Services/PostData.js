import axios from 'axios'
export function postdata(type,userdata){
  let baseurl="https://portfolio-api185-dev.herokuapp.com/users/";

  return axios.post(baseurl+type,userdata,{
    'Content-Type':'application/json',
    'Accept':'application/json'
  }).then((sucess)=>sucess).catch(error=>{console.log(error)})


}