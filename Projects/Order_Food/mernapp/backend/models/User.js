const mongoose = require('mongoose');
const validator = require('validator');
const {Schema} = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please provide your name"],
        trim: true,
        minLength: [3, "Name must be at least 3 character"],
        maxLength: [100, "Name is too long"],
        unique: true
    },
    location: {
        type: String,
        required: [true, "Please provide your location"],
        trim: true,
        minLength: [2, "Location must be at least 2 character"],
        maxLength: [100, "Location is too long"]
    },
    email: {
        type: String,
        required: [true, "Please provide your email"],
        trim: true,
        lowercase: true,
        unique: [true, "Please provide a unique email"],
        validate: [validator.isEmail, "provide a valid Email"]
    },
    password: {
        type: String,
        required: [true, "Please provide your password"],
        minLength: [6, "Password must be at least 6 character"],
        validate: {
            validator: (value) => {
                validator.isStrongPassword(value, {
                    minLength: 6,
                    minLowercase: 3,
                    minNumbers: 1
                })
            },
            message: "Password {VALUE} is not strong enough"
        }
    },
    date: {
        type: Date,
        default: Date.now
    }

},
{
    timestamps: true,
    versionKey: false
});

const userModel= mongoose.model('user', userSchema);
module.exports = userModel;