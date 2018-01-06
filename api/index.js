const languages = require("../data/languages");
const words = require("../data/languages");

function getCategories() {
  const categories = [];
  words.forEach(word => {
    const category = categories.find(({ name }) => name === word.category);
    if (!category) {
      categories.push({
        name: word.category,
        words: [word],
      });
    } else {
      category.words.push(word);
    }
  });
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

export { languages, getCategories, getWordCount, getTranslatedWordCount };
