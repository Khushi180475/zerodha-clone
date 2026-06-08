const mongoose = require("mongoose");

// This defines what a User looks like in your database
const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true,          // removes extra spaces
        },
        email: {
            type: String,
            required: true,
            unique: true,        // no two users with same email
            lowercase: true,     // always store as lowercase
        },
        password: {
            type: String,
            required: true,      // will be hashed before saving
        },
    },
    { timestamps: true }         // auto adds createdAt, updatedAt
);

module.exports = mongoose.model("User", UserSchema);