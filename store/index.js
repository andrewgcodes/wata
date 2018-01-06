import { Store } from "vuex";
import { languages } from "../api";

const mutations = {
  selectLanguage(state, selectedLanguage) {
    state.selectedLanguage = selectedLanguage;
  },
};

const getters = {
  allLanguages: state => state.languages,
  getSelectedLanguage: state => state.selectedLanguage,
};

const state = {
  languages,
  selectedLanguage: null,
};

const store = new Store({
  state,
  getters,
  mutations,
});

export default () => store;
