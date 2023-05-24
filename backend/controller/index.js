const Joi = require('joi')

const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,25}$/;
const authController = {
    // user registeration 
    async register(req, res, next) {
    const userRegisterSchema = Joi.object({
        username: Joi.string().min(5).max(30).required,
        name: Joi.string().max(30).required,
        email: Joi.string().email().required,
        email: Joi.string().pattern(passwordPattern).required,
    });
        
        const {error} = userRegisterSchema.validate(req.body);
        // error handling here
        if(error){
           return next(error)
        }

     }, 
    async login() { }, 
}

module.exports = authController;