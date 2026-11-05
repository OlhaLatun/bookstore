import { useState } from "react"
import BookCard from "../components/BookCard"
import Book1 from '../assets/book1.png'
export default function CatalogPage() {
    const [books, setBooks] = useState([
        {
            id: 0,
            name: "Book1",
            author: "John Doe",
            description: "",
            image_url: Book1,
            rating: {
                average: 5,
                totalVotes: 123
            },
            available: true,
            "category": {
                id: 0,
                displayName: "fiction"
            },
            price: {
                value: 200,
                currency: "UAH"
            }
        },
        {
            id: 1,
            name: "Book1",
            author: "John Doe",
            description: "",
            image_url: Book1,
            rating: {
                average: 5,
                totalVotes: 123
            },
            available: false,
            "category": {
                id: 0,
                displayName: "fiction"
            },
            price: {
                value: 200,
                currency: "UAH"
            }
        },

    ])
    return (
        <div className="catalog-container grid grid-cols-4 gap-4">

            {
                books.map(book => <BookCard book={book} key={book.id} />)
            }
        </div>
    )
}