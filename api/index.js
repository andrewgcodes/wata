const languages = require("../data/languages");
const words = require("../data/words");
const categories = require("../data/categories");

function getCategories() {
  const allCategories = [];
  words.forEach(word => {
    const category = allCategories.find(({ name }) => name === word.category);
    if (!category) {
      allCategories.push({
        name: word.category,
        words: [word],
      });
    } else {
      category.words.push(word);
    }
  });
  return allCategories;
}

function getAvailableCategories() {
  return categories;
}

function getWordCount() {
  return words.length;
}

function getTranslatedWordCount(language) {
  return words.reduce(
    (total, { translations }) =>
      translations[language] ? (total += 1) : total,
    0
  );
}

export {
  languages,
  getCategories,
  getAvailableCategories,
  getWordCount,
  getTranslatedWordCount,
};
