import express from 'express';
import books from '../data/books.json' with { type: 'json' };

const router = express.Router();

router.get('/', (req, res) => {
    res.send(books)
})

router.get('/:bookId', (req, res) => {
    const book = books.find(
        book => book.id === Number(req.params.bookId)
    );

    if (!book) {
        return res.status(404).json({
            message: `Book with id: ${req.params.bookId} not found`
        });
    }

    res.status(200).json(book);
})

export default router;