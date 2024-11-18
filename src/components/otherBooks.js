import React from 'react'
import BookRating from './bookRating'
import { useSelector } from 'react-redux'
import { FaShoppingCart } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const OtherBooks = ({ viewedBook }) => {

    const allBooks = useSelector(state => state.allBooks)
    const navigate = useNavigate()

    const handleViewOther = (link) => {
        navigate(link)
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div className='other-books'>
            <h4>Other {viewedBook.genre} books you might like</h4>
            <div className='book-gallery'>
                {allBooks.length &&
                    allBooks.filter(gen => gen.genre == viewedBook.genre && gen.title != viewedBook.title).slice(0, 5).map((book, i) => (<div
                        lg={2} md={3} sm={5} xs={10} key={i}
                        className='book-container'
                    >
                        <img alt={`Book Cover - ${book.title}`}
                            src={`https://expressbuckett.s3.eu-west-2.amazonaws.com/bookstore/${book.cover}`}
                            className='book-image' />

                        <div className="book-info">
                            <h4>{book.title}</h4>
                            <p>{book.author}</p>
                            <button className='more-details' onClick={() => handleViewOther(`/viewmore/${book._id}`)}>more details</button>
                        </div>

                        <BookRating />

                        <button className='add-to-basket'> <FaShoppingCart size={18} /> <span>Add to basket</span></button>

                    </div>))}
            </div>
        </div >)
}

export default OtherBooks