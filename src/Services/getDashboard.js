import axios from 'axios'
export function getDashboard(type){
  let baseurl="https://portfolio-api185-dev.herokuapp.com/";
  console.log(baseurl);
  return axios.get(baseurl+type).then((sucess)=>sucess).catch(error=>{console.log(error)})


}