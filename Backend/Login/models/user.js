import { mongoose, Schema } from 'mongoose'
import bcrypt from "bcryptjs";

const userSchema = new Schema({
    email: String,
    password: String,
    name: String
});

userSchema.methods.encryptPassword = (password) =>{
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

userSchema.methods.encryptPassword = function (password) {
    return bcrypt.compareSync(password, this.password)
};

export default mongoose.model('users', userSchema)