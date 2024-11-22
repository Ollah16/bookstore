import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Book from './book'

const SearchedBook = () => {
    const searchedBook = useSelector(state => state.searchedBook)
    const navigate = useNavigate()

    return (<section className='book__gallery'>
        {searchedBook.length > 0 && searchedBook.map((book, index) => (
            <Book book={book} onClick={() => navigate(`/viewmore/${book._id}`)} key={index} />
        ))}
    </section>)

}

export default SearchedBook