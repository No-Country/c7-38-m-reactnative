const mongoose  = import('mongoose');

const trainingSchema = new mongoose.Schema({
    
    userId: {
		type: mongoose.Schema.ObjectId,
		ref: 'User',
    },

    nameTrainin: {
        type: string,
        requiere:true,
        allowNull: false,
    },

    timeStar: {
        type : data,
        requiere:false,

    },

    endTime: {
        type: data,
        requiere:false,
    }
});

const Training = mongoose.model('Training', trainingSchema);
module.exports = { Training };