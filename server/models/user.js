const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        lowercase: true,
        unique: true,
        required: [true, "can't be blank"]
    },
    email: {
        type: String,
        lowercase: true,
        required: [true, "can't be blank"]
    },
    password: {
        type: String,
        required: true
    },
    bio: String
}, { timestamps: true });

// Hash the password before saving the user model
UserSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

// Method to compare passwords
UserSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

// Method to generate JWT
UserSchema.methods.generateJWT = function() {
    const payload = {
        id: this._id,
        username: this.username,
    };
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '60d' }); // Token expires in 60 days
};


module.exports = mongoose.model("User", UserSchema);