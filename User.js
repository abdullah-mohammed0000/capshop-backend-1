// const mongoose = require("mongoose");

// // ✅ Define User Schema
// const UserSchema = new mongoose.Schema({
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
// }, { timestamps: true }); // Adds createdAt & updatedAt timestamps automatically

// // ✅ Export the Model
// module.exports = mongoose.model("User", UserSchema);
const mongoose = require("mongoose");

// ✅ Define the User Schema
const UserSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true, // Ensures email is unique
        },
        password: {
            type: String,
            required: true,
        },
    },
    { timestamps: true } // Adds createdAt & updatedAt timestamps automatically
);

// ✅ Export the Model
module.exports = mongoose.model("User", UserSchema);
