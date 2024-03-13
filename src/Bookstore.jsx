import './Book.css'
export default function Bookstore({book}){
    return (
        <div className="book">
            <h3>Store id: {book.price}</h3>
        </div>
    )
}
