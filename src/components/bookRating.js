import React from 'react'
import { TiStar } from 'react-icons/ti'

const BookRating = ({ size }) => {
    return (
        <div className='book__rating'>
            <TiStar size={size} />
            <TiStar size={size} />
            <TiStar size={size} />
            <TiStar size={size} />
            <TiStar size={size} />
        </div>)
}

export default BookRating