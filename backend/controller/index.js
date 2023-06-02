const Joi = require('joi')
const bcrypt = require('bcrypt')
const userSchema = require('../models/users');
const users = require('../models/users');
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,25}$/;
const authController = {
    // user registeration 
    async register(req, res, next) {
    const userRegisterSchema = Joi.object({
        name: Joi.string().max(30).required(),
        username: Joi.string().min(5).max(30).required(),
        email: Joi.string().email().required(),
        password: Joi.string().pattern(passwordPattern).required(),
        confirmPassword: Joi.ref("password"),
    });
        
        const {error} = userRegisterSchema.validate(req.body);
        // error handling here in validation
        if(error){
           return next(error)
        }
        
        // if email and user register => return callback
        const {name, username, email, password} = req.body;
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
        // password hashed 
        const hashedPassword = await bcrypt.hash(password, 10);
        // data store in db
        const userToRegister = new users({
            name,
            username,
            email,
            password: hashedPassword
        });
        const userSave = await userToRegister.save();
        // response send
        return res.status(201).json({userSave});

     }, 
    async login() { }, 
}

module.exports = authController;