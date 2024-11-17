import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { TiStar } from 'react-icons/ti'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const SearchedBook = () => {
    const searchedBook = useSelector(state => state.searchedBook)
    const navigate = useNavigate()

    return searchedBook && (
        <section className='d-flex justify-content-center search-section'>
            <div
                lg={2} md={3} sm={5} xs={10}
                className='book-container'
            >
                <img alt={`Book Cover - ${searchedBook.title}`}
                    src={`https://expressbuckett.s3.eu-west-2.amazonaws.com/bookstore/${searchedBook.cover}`}
                    className='book-image' />

                <div className="book-info"
                >
                    <h4>{searchedBook.title}</h4>
                    <p>{searchedBook.author}</p>
                    <button className='more-details' onClick={() => navigate(`/viewmore/${searchedBook._id}`)}>more details</button>
                </div>

                <div className='book-rating'>
                    <TiStar size={20} />
                    <TiStar size={20} />
                    <TiStar size={20} />
                    <TiStar size={20} />
                    <TiStar size={20} />
                </div>

                <button className='add-to-basket'> <FaShoppingCart size={18} /> <span>Add to basket</span></button>

            </div>
        </section>)
}

export default SearchedBook