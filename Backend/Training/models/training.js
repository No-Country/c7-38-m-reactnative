const mongoose  = import('mongoose');

const trainingSchema = new mongoose.Schema({
    
    userId: {
		type: mongoose.Schema.ObjectId,
		ref: 'User',
    },

    nameTraining: {
        type: string,
        requiere:true,
        allowNull: false,
    },

    category:{
        type: string,
        requiere: true,
        allowNull: false,
    },

    days:{
        type: array,
        require: true,
        allowNull: false,
    },

    hours:{
        startHour:{
            type: date,
            requiere: true,
        },

        endHour:{
            type: date,
            requiere: true,
        },
        
    },

    date: {
        startDate:{
            type: date,
            requiere: true,
        },

        endData: {
            type: data,
            requiere:true,
        }
    },

    
});

const Training = mongoose.model('Training', trainingSchema);
module.exports = { Training };