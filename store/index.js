import { Store } from "vuex";
import mutations from "./mutations";
import getters from "./getters";
import state from "./state";

const store = new Store({
  state,
  getters,
  mutations,
});

export default () => store;
