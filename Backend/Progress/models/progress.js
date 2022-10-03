const mongoose  = require('mongoose');
const { Schema } = mongoose;

const progressSchema = new Schema({
    
    userId: {
		type: mongoose.Schema.ObjectId,
		ref: 'User',
    },

    nameTraining: {
        type: String,
        requiere:true,
        allowNull: false,
    },

    peso:{
        type: Number,
        requiere: true,
        allowNull: false,
    },

    imagen:{
        type: String,
        require: true,
        allowNull: false,
    },

    tiempoRealizado:{
        startHour:{
            type: Date,
            requiere: true,
        },

        endHour:{
            type: Date,
            requiere: true,
        },
        
    },
    cometarioProgress: {
        type: String,
        requiere:true,
        allowNull: false,
    },

    
});


module.exports = mongoose.model('Progress', progressSchema)