import axios from 'axios';

const axiosPublic = axios.create({
  baseURL: "http://127.0.0.1:10000",
  // baseURL: "https://tasty-server-2-1.onrender.com",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;