import { getTranslatedWordCount } from "../api";

const getters = {
  allLanguages: state => state.languages,
  getSelectedLanguage: state => state.selectedLanguage,
  allCategories: state => state.categories,
  translatedWordCount: state => getTranslatedWordCount(state.selectedLanguage),
  availableCategories: state => state.availableCategories,
};

export default getters;
