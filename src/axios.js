import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder1-backend.herokuapp.com",
});

export default instance;
