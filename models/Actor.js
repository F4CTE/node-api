const mongoose = require('mongoose');

const ActorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    birthdate: {
        type: Date,
        required: true,
    },
});

const Actor = mongoose.model('Actor', ActorSchema);

export default Actor;