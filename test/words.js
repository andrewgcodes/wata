const test = require("ava");
const Joi = require("joi");
const words = require("../data/words");

const schema = Joi.array()
  .required()
  .min(1)
  .unique("name")
  .unique("emoji")
  .items(
    Joi.object().keys({
      name: Joi.string().required(),
      category: Joi.string().required(),
      emoji: Joi.string().required(),
      translations: Joi.object().required(),
    })
  );

test("words data", t => {
  const { error } = Joi.validate(words, schema);
  t.is(error, null);
});
