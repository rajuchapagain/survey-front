import axios from "axios";
const instance = axios.create({
  // baseURL: "http://localhost:5001/ishuweb/us-central1/api", // local test
  baseURL: "https://localhost:44309/api/", // live
});

export default instance;
