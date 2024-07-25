import axios from 'axios';

const axiosInstance = axios.create({
  //******* Local instance of firebase functions *******
  // baseURL: "http://127.0.0.1:5001/clone-project2-88390/us-central1/api",

  // ********* Deployed version of amazon server on render.com *****
  baseURL: "https://amazon-api-deploy-wpud.onrender.com/",
});

export {axiosInstance}