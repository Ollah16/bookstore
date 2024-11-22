import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Book from './book'

const Allbooks = () => {
    const allBooks = useSelector(state => state.allBooks)
    const navigate = useNavigate()

    return (<section className='book__gallery'>
        {allBooks.length > 0 && allBooks.map((book, i) => {

            return (
                <Book book={book} key={i} onClick={() => navigate(`/viewmore/${book._id}`)} />
            )
        })}
    </section>
    )
}

export default Allbooks