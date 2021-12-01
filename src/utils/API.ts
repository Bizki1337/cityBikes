import axios from "axios";

export default axios.create({
  baseURL: "https://api.citybik.es/v2/networks",
  responseType: "json"
});