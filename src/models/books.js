const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    author: {
        type: String,
        required: true,
        trim: true,
    },
    publisher: {
        type: String,
        required: true,
        trim: true,
    },
    date_pub: {
        type: Date,
        required: true,
        default: Date.now(),
    },
    price: {
        type: Number,
        required: true,
        min: 0,
        max: 20000,
    },
    genre: {
        type: String,
        trim: true,
        maxlength: 50,
    },
    isbn: {
        type: Number,
        required: true,
        unique: true,
    },
    summary: {
        type: String,
        trim: true,
        maxlength: 500,
    },
    available: {
        type: Boolean,
        required: true,
        default: true,
    },
});

const Book = new mongoose.model('book', bookSchema);

module.exports = Book;