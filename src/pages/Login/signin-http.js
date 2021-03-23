import axios from 'axios'; 

const signToken = async (route,state) => {
  const { data: { token } }= await axios({
    method: 'POST',
    baseURL: process.env.REACT_APP_SERVER_URL,
    url: route,
    data: state
  });
  
  return token
}

export default signToken
