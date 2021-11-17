const mongoose = require("mongoose");

const Course = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    author: { type: String },
    image: { type: String }
}, {
    timestamps: true
}
)

module.exports = mongoose.model('Course', Course)