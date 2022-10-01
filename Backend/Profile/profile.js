const mongoose = require('mongoose')
const { Schema } = mongoose;

const profileSchema = new Schema({

    //Seria bueno colocar a que schema hace referencia ya que esto es del usuario,
    // seria algo como ref: 'User' para que traiga esa relacion User-->profileSchema
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