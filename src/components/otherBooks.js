import React from 'react'
import BookRating from './bookRating'
import { useSelector } from 'react-redux'
import { FaShoppingCart } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import Button from './button'
import Book from './book'

const OtherBooks = ({ viewedBook }) => {

    const allBooks = useSelector(state => state.allBooks)
    const navigate = useNavigate()

    return (
        <div className='other-books'>
            <h4>Other {viewedBook.genre} books you might like</h4>
            <div className='book__gallery'>
                {allBooks.length &&
                    allBooks.filter(gen => gen.genre == viewedBook.genre && gen.title != viewedBook.title).slice(0, 5).map((book, i) => (
                        <Book book={book} key={i} onClick={() => {
                            navigate(`/viewmore/${book._id}`);
                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth'
                            })
                        }} />
                    ))}
            </div>
        </div >)
}

export default OtherBooks