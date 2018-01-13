const test = require("ava");
const Joi = require("joi");
const languages = require("../data/languages");

const schema = Joi.array()
  .required()
  .min(1)
  .unique("name")
  .unique("slug")
  .items(
    Joi.object().keys({
      name: Joi.string().required(),
      slug: Joi.string()
        .regex(/^[a-zA-Z-]+$/)
        .min(2)
        .required(),
      countries: Joi.array().items(Joi.string()),
    })
  );

test("languages data", t => {
  const { error } = Joi.validate(languages, schema);
  t.is(error, null);
});
