import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "04e85a165d75448587b910a3a33e46fb",
  },
});
