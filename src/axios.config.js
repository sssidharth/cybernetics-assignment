import axios from "axios";

console.log("Base URL:", process.env.REACT_APP_API_BASE_URL);

const apiClient = axios.create({
    baseURL: "http://localhost:3001",
    headers: {
      "Content-Type": "application/json",
    },
  });
  
  export default apiClient;