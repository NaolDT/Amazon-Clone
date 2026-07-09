import axios from "axios";
const axiosInstance=axios.create({
    // baseURL:"http://localhost:5000",
    baseURL:"https://amazon-clone-g3cp.onrender.com"
})
export {axiosInstance}