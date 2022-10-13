const mongoose = require('mongoose')
const { Schema } = mongoose;
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    
    /* trainingId: {
		type: mongoose.Schema.ObjectId,
		ref: 'Training',
    },

    profileId: {
		type: mongoose.Schema.ObjectId,
		ref: 'Profile',
    },
 */
    email: String,
    password: String,
    name: String,
    status: {
        type: String,
        default: 'active',
    }
});

userSchema.methods.encryptPassword = (password) =>{
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

userSchema.methods.encryptPassword = function (password) {
    return bcrypt.compareSync(password, this.password)
}; 

module.exports = mongoose.model('User', userSchema)