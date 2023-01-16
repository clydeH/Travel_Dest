import { createStore } from "vuex";
import countriesModule from "@/store/modules/countries/index";

const store = createStore({
  modules: {
    country: countriesModule,
  },
});

export default store;
