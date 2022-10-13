const mongoose = require('mongoose')
const { Schema } = mongoose;
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    email: {type: String, requiere:true},
    password: {type: String, requiere:true},
    name: {type: String, requiere:true},
    status: {type: String, default: 'active',}
});

userSchema.methods.encryptPassword = (password) =>{
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

userSchema.methods.encryptPassword = function (password) {
    return bcrypt.compareSync(password, this.password)
}; 

module.exports = mongoose.model('User', userSchema)