const test = require("ava");
const Joi = require("joi");
const words = require("../data/words");
const categories = require("../data/categories");

const availableCategories = categories.map(({ name }) => name);

const schema = Joi.array()
  .required()
  .min(1)
  .unique("name")
  .unique("emoji")
  .items(
    Joi.object().keys({
      name: Joi.string().required(),
      category: Joi.string()
        .required()
        .valid(availableCategories),
      emoji: Joi.string().required(),
      translations: Joi.object().required(),
    })
  );

test("words data", t => {
  const { error } = Joi.validate(words, schema);
  t.is(error, null);
});
