const mongoose  = require('mongoose');
const { Schema } = mongoose;

const trainingSchema = new mongoose.Schema({
    
    userId: {
		type: mongoose.Schema.ObjectId,
		ref: 'User',
    },

    nameTraining: {
        type: String,
        requiere:true,
        allowNull: false,
    },

    category:{
        type: String,
        requiere: true,
        allowNull: false,
    },

    days:{
        type: Date(),
        require: true,
        allowNull: false,
    },

    hours:{
        startHour:{
            type: Date,
            requiere: true,
        },

        endHour:{
            type: Date,
            requiere: true,
        },
        
    },

    date: {
        startDate:{
            type: Date,
            requiere: true,
        },

        endData: {
            type: Date,
            requiere:true,
        }
    },

    status: {
        type: String,
        default: 'active',
    }
});

const Training = mongoose.model('Training', trainingSchema);
module.exports = { Training };