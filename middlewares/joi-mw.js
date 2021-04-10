const Joi = require('joi')

const schemas = {
  bookSave: {
    bookName: Joi.string().max(255).required(),
    writer: Joi.string().max(255).required(),
    content: Joi.string(),
    upfile: Joi.binary(),
  },
  bookUpdate: {
    id: Joi.number().required(),
    page: Joi.number(),
    bookName: Joi.string().max(255).required(),
    writer: Joi.string().max(255).required(),
    content: Joi.string(),
    upfile: Joi.binary(),
  },

  join: {
    userid: Joi.string().min(8).max(24).required(),
    userpw: Joi.string().min(8).max(24).required(),
  }
}

const joiMiddleWare = (value) => {
  return async(req,res,next) => {
    try{
      const schema = Joi.object(schemas[schema])
      await schema.validateAsync(req.body)
      next()
    }
    catch(err){
      //req.joiError = err
      next()
    }
  }
}

module.exports = joiMiddleWare