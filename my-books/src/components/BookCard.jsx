import "./BookCard.css"
import Button from "./ui-kit/Button"

export default function BookCard({ book }) {

    return (<div className="book-card">
        <div className="img-container">
            <img src={book.image_url} alt={book.name}></img>
        </div>
        <div className="details-container">
            <div className="title">
                <h2>{book.name}</h2>
                <p> {book.author}</p>
            </div>

            <p className="rating"><span>★</span> {book.rating.value}({book.rating.totalVotes})</p>
            <p className={book.available ? 'text-green-500' : 'text-red-500'}> {book.available ? 'In Stock' : 'Out of Stock'}</p>
        </div>
        <div className="actions-container">
            <span> {book.price.value} {book.price.currency} </span>

            <Button type={'button'} color={book.available ? 'primary' : 'secondary'} label={book.available ? 'Add' : 'Notify'} />
        </div>
    </div>)
}