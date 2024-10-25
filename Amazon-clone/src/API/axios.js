import axios from "axios";

const axiosInstance = axios.create({

  // baseURL: "https://amazon-backend-updated.onrender.com",

  // backend deployed on render
  baseURL: "https://amazon-api-deploy-dx0e.onrender.com",
});

export { axiosInstance };


 
 
 