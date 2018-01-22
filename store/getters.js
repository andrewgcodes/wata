const getters = {
  allLanguages: state => state.languages,
  getSelectedLanguage: state => state.selectedLanguage,
  allCategories: state => state.categories,
  translatedWordCount: state => state.translatedWordCount,
  availableCategories: state => state.availableCategories,
};

export default getters;
