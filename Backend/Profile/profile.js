const mongoose = require('mongoose')
const { Schema } = mongoose;

const profileSchema = new Schema({
    age:{
        type: Number,
        requiere: true,
        allowNull: false,
    },
    phone:{
        type: Number,
        requiere: true,
        allowNull: false,
    },
    weight:{
        type: Number,
        requiere: true,
        allowNull: false,
    },
    idealWeight:{
        type: Number,
        requiere: true,
        allowNull: false,
    }
});

module.exports = mongoose.model('Profile', profileSchema)
module.exports = { Profile };