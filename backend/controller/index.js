const Joi = require('joi')
const userSchema = require('../models/users');
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
        // error handling here in validation
        if(error){
           return next(error)
        }
        
        // if email and user register => return callback
        const {username, name, email, password} = req.body;
        const emailInUse = await userSchema.exists({email});
        const usernameInUse = await userSchema.exists({username});
        
        try {
            if(emailInUse){
                const error = {
                    status : 409,
                    message: "Email already registered, use another email!"
                }
                return next(error);
            }
            if(usernameInUse){
                const error = {
                    status : 409,
                    message: "username already registered, use another username!"
                }
                return next(error);
            }
    
        } catch (error) {
            return next(error)
        }
     }, 
    async login() { }, 
}

module.exports = authController;