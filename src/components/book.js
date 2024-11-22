import React from 'react'
import Button from './button'
import BookRating from './bookRating'
import { FaShoppingCart } from 'react-icons/fa'

const Book = ({ book, onClick }) => {

    return (
        <div
            lg={2} md={3} sm={5} xs={10}
            className='book__container'
        >
            <div className='book__cover'>


                <img alt={`Book Cover - ${book.title}`}
                    loading="lazy"
                    src={`https://expressbuckett.s3.eu-west-2.amazonaws.com/bookstore/${book.cover}`}
                    className='book-image' />

                <div className="book-info"
                >
                    <h4>{book.title}</h4>
                    <p>{book.author}</p>
                    <Button className={'more-details'} svg={null} value={'more details'} onClick={onClick} />
                </div>

            </div>
            <div className='book__subcon'>
                <BookRating size={25} />
                <Button className={'add__button'} value={'Add to basket'} svg={<FaShoppingCart size={18} />} />
            </div>
        </div>
    )

}

export default Book