const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "can't be blank"]
    },
    description: {
        type: String,
        required: [true, "can't be blank"]
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
    author: {
    type: mongoose.Schema.Types.ObjectId, // Referring to the User schema (if using a User collection)
    ref: "User", // Reference to the User model
    required: true,
  },
}, { timestamps: true });



module.exports = mongoose.model("Todo", todoSchema);