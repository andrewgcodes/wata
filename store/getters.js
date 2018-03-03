import { getTranslatedWordCount } from "../api";
import splitAlphabetically from "../utils";

const getters = {
  allLanguages: state => state.languages,
  getSelectedLanguage: state => state.selectedLanguage,
  allCategories: state => state.categories,
  translatedWordCount: state => getTranslatedWordCount(state.selectedLanguage),
  availableCategories: state => state.availableCategories,
  languagesAlphabeticallySplited: state => splitAlphabetically(state.languages),
};

export default getters;
