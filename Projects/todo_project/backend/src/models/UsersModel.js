const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
    {
        firstName: {
            type: String
        },
        LastName: {
            type: String
        },
        email: {
            type: String,
            unique: true
        },
        mobile: {
            type: String
        },
        password: {
            type: String
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const UserModel = mongoose.model('users', UserSchema);
module.exports = UserModel;