import {
  languages,
  getCategories,
  getAvailableCategories,
} from "../api";

const categories = getCategories();
const availableCategories = getAvailableCategories();

const state = {
  selectedLanguage: null,
  languages,
  categories,
  availableCategories,
};

export default state;
