import React from 'react'
import { useSelector } from 'react-redux'
import { TiStar } from "react-icons/ti";
import { FaShoppingCart } from "react-icons/fa";
import { BookLoaderComponent } from './bookloader';
import { useNavigate } from 'react-router-dom';

const Allbooks = () => {
    const allBooks = useSelector(state => state.allBooks)
    const searchedBook = useSelector(state => state.searchedBook)
    const navigate = useNavigate()

    if (allBooks.length && !searchedBook) {
        return (<section className='book-gallery'>
            {allBooks.map((book, i) => {

                return (<div
                    lg={2} md={3} sm={5} xs={10} key={i}
                    className='book-container'
                >
                    <img alt={`Book Cover - ${book.title}`}
                        loading="lazy"
                        src={`https://expressbuckett.s3.eu-west-2.amazonaws.com/bookstore/${book.cover}`}
                        className='book-image' />

                    <div className="book-info"
                    >
                        <h4>{book.title}</h4>
                        <p>{book.author}</p>
                        <button className='more-details' onClick={() => navigate(`/viewmore/${book._id}`)}>more details</button>
                    </div>

                    <div className='book-rating'>
                        <TiStar size={20} />
                        <TiStar size={20} />
                        <TiStar size={20} />
                        <TiStar size={20} />
                        <TiStar size={20} />
                    </div>

                    <button className='add-to-basket'> <FaShoppingCart size={18} /> <span>Add to basket</span></button>

                </div>)
            })}
        </section>
        )
    }

    return <BookLoaderComponent />
}

export default Allbooks