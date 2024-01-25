import axios from "axios";
import Cookies from "js-cookie";
import hostName from "./domain";

async function isAuth(){
    const userToken = Cookies.get('userToken');
  if(userToken){
    try{
       const response = await axios.post(hostName+'/auth',{userToken});
       if(response.data.status === 200){
        return true
       }
    }
    catch(error){
        return false;
    }
  }
  return false;
}

export default isAuth