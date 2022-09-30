const mongoose = require('mongoose')
const { Schema } = mongoose;
const bcrypt = require('bcrypt-nodejs')

const userSchema = new Schema({
    email: String,
    password: String,
    name: String
    // creo que es conveniente 
    //colocar el estatus del usuario./
    //algo asi
    // status: {
     //      type: String,
      //     default: 'active',
   //     },
});

userSchema.methods.encryptPassword = (password) =>{
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

userSchema.methods.encryptPassword = function (password) {
    return bcrypt.compareSync(password, this.password)
};

module.exports = mongoose.model('User', userSchema)
module.exports = { User };