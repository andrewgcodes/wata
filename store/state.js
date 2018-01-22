import {
  languages,
  getCategories,
  getAvailableCategories,
  getTranslatedWordCount,
} from "../api";

const categories = getCategories();
const availableCategories = getAvailableCategories();
const translatedWordCount = getTranslatedWordCount();

const state = {
  languages,
  selectedLanguage: null,
  categories,
  availableCategories,
  translatedWordCount,
};

export default state;
