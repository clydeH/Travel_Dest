import axios from "axios";

export default {
  async data(context) {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      console.log(response);
      context.commit("setData", {
        countries: response.data,
      });
    } catch (error) {
      //console.error(error);
    }
  },
  add(context, payload) {
    context.commit("setAdd", {
      list: payload,
    });
  },
};
