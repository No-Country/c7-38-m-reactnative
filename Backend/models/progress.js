const mongoose  = import('mongoose');

const progressSchema = new mongoose.Schema({
    
    userId: {
		type: mongoose.Schema.ObjectId,
		ref: 'User',
    },

    nameTraining: {
        type: string,
        requiere:true,
        allowNull: false,
    },

    peso:{
        type: number,
        requiere: true,
        allowNull: false,
    },

    imagen:{
        type: string,
        require: true,
        allowNull: false,
    },

    tiempoRealizado:{
        startHour:{
            type: date,
            requiere: true,
        },

        endHour:{
            type: date,
            requiere: true,
        },
        
    },
    cometarioProgress: {
        type: string,
        requiere:true,
        allowNull: false,
    },

    
});

const Progress = mongoose.model('Progress', progressSchema);
module.exports = { Progress };