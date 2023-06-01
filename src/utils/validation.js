import Joi from "joi";

export const LoginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

export const PostSchema = Joi.object({
  username: Joi.string()
    .min(2)
    .max(100)
    .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
    .required(),
  password: Joi.string().min(8).max(100).required(),
  image: Joi.string().pattern(new RegExp('((jpe?g|png|gif|bmp))$')).required()
});
