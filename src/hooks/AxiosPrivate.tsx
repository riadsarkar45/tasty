import axios from 'axios';

const axiosPrivate = axios.create({
  baseURL: "http://localhost:3000",
  // baseURL: "https://tasty-server-2-1.onrender.com",
  withCredentials: true,
});

axiosPrivate.interceptors.response.use(
  response => response,
  error => {
    if (error?.response?.status === 401) {
      console.log("Unauthorized! Logging out...");
    }
    return Promise.reject(error);
  }
)
const useAxiosPrivate = () => axiosPrivate;

export default useAxiosPrivate;