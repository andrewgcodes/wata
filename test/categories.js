const test = require("ava");
const Joi = require("joi");
const categories = require("../data/categories");

const schema = Joi.array()
  .required()
  .min(1)
  .unique("name")
  .unique("icon")
  .items(
    Joi.object().keys({
      name: Joi.string().required(),
      icon: Joi.string().required(),
    })
  );

test("categories data", t => {
  const { error } = Joi.validate(categories, schema);
  t.is(error, null);
});
