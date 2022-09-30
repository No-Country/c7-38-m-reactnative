const mongoose = require('mongoose')
const { Schema } = mongoose;
const bcrypt = require('bcrypt-nodejs')

const userSchema = new Schema({
    email: String,
    password: String,
    name: String,
    status: {
        type: String,
        default: 'active',
    }
}); // fijate asi decias vos Jorge? o de otra manera era el status?

userSchema.methods.encryptPassword = (password) =>{
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

userSchema.methods.encryptPassword = function (password) {
    return bcrypt.compareSync(password, this.password)
};

module.exports = mongoose.model('User', userSchema)
module.exports = { User };