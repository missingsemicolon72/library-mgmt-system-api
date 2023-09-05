require('./db/conn');
const express = require('express');
const bookRouter = require('./routers/booksRouter');

const app = express();
const PORT = process.env.PORT || 8888;

app.use(express.json());
app.use(bookRouter);

app.listen(PORT, () => {
    console.log(`Server is up and running on port number ${PORT}`);
});