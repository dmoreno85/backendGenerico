const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const SECRET_AUTH_JWT = require('../config/password').SECRET_AUTH_JWT;
// const {isEmail} = require('validator');

const userSchema = new mongoose.Schema({
    nick: {
        type: String,
        unique: true,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        // validate: function (email) {
        //     return new Promise(function (resolve) {
        //         setTimeout(function () {
        //             resolve(isEmail(email));
        //         }, 5);
        //     })

        // }
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
    info: {
        name: {
            type: String,
        },
        lastname: {
            type: String,
        },
        avatar: String,
        confirmedEmail: Boolean,
    }
}, {
    timestamps: true
})

// userSchema.pre('save', function (next) {
//     const user = this;
//     if (user.isModified('password')) {
//         bcrypt.genSalt(user.password.length)
//             .then(salt => bcrypt.hash(user.password, salt)
//                 .then(hash => {
//                     console.log(hash)
//                     user.password = hash;
//                     next();
//                 }))
//             .catch(error => res.status(500).send(error))
//     } else {
//         return next();
//     }
// });

userSchema.methods.toJSON = function () {
    const {
        _id,
        name,
        nick,
        email,
        confirmedEmail,
        token,
        avatar,
    } = this;
    return {
        _id,
        name,
        nick,
        email,
        confirmedEmail,
        avatar,
        token
    };
}

// userSchema.methods.generateAuthToken = function () {
//     const user = this;
//     const token = jwt.sign({
//         _id: user._id
//     }, SECRET_AUTH_JWT);
//     return token;
// }

const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;