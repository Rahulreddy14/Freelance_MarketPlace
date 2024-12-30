import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const newRequest = axios.create({
  baseURL: "http://localhost:8800/api",
  withCredentials: true,
});

export default newRequest;