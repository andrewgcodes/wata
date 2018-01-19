import { Store } from "vuex";
import { languages, getCategories, getTranslatedWordCount } from "../api";

const categories = getCategories();

const mutations = {
  selectLanguage(state, selectedLanguage) {
    state.selectedLanguage = selectedLanguage;
  },
};

const getters = {
  allLanguages: state => state.languages,
  getSelectedLanguage: state => state.selectedLanguage,
  allCategories: state => state.categories,
  translatedWordCount: state => getTranslatedWordCount(state.selectedLanguage),
};

const state = {
  languages,
  selectedLanguage: null,
  categories,
};

const store = new Store({
  state,
  getters,
  mutations,
});

export default () => store;
