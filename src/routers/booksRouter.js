const express = require('express');
const router = new express.Router();
const Book = require('../models/books');

router.get('/books', async (req, res) => {
    try {
        const getAllResult = await Book.find();
        if(!getAllResult)
            res.status(404).send('Library is empty!');
        else
            res.status(200).send(getAllResult);
    } catch (error) {
        res.status(500).send(`An error occurred\n${error}`);
    }
});

router.get('/books/:id', async (req, res) => {
    try {
        const getBookResult = await Book.findById(req.params.id);
        if(!getBookResult)
            res.status(404).send('Book not found in the library!');
        else
            res.status(200).send(getBookResult);
    } catch (error) {
        res.status(500).send(`An error occurred\n${error}`);
    }
});

router.post('/books', (req, res) => {
    const newBook = new Book(req.body);
    newBook.save().then(() => {
        res.status(201).send(newBook);
    }).catch((err) => {
        res.status(400).send(err);
    })
});

router.patch('/books/:id', async (req, res) => {
    try {
        const updateResult = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if(!updateResult)
            res.status(400).send('Could not update the book details! Please check the Book ID again & make sure the updated data is in the correct JSON format.');
        else
            res.status(200).send(updateResult);
    } catch (error) {
        res.status(500).send(`An error occurred\n${error}`);
    }
});

router.delete('/books/:id', async (req, res) => {
    try {
        const deleteResult = await Book.findByIdAndDelete(req.params.id);
        if(!deleteResult)
            res.status(400).send('Could not delete the requested book! Please check the Book ID again.');
        else
            res.status(200).send(deleteResult);
    } catch (error) {
        res.status(500).send(`An error occurred\n${error}`);
    }
});

module.exports = router;