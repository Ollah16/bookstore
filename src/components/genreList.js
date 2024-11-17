import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const GenreList = ({ showGenre }) => {
    const booksByGenre = useSelector(state => state.booksByGenre)
    const navigate = useNavigate()

    return (
        <section id='genre-section' className={`genre-div ${showGenre ? 'display-genre' : 'no-display-genre'}`}>
            <div className='dl'>
                {Object.entries(booksByGenre).map(([genre, genreBooks]) => (
                    <dl key={genre} >
                        <dt>{genre}</dt>
                        <dd className={`${genreBooks.length > 10 ? 'scrolly' : null} ${!showGenre ? 'close-list' : 'open-list'}`}>
                            {genreBooks.map(book => (
                                <span
                                    onClick={() => navigate(`/viewmore/${book._id}`)}
                                    key={book._id}
                                >
                                    {book.title}
                                </span>
                            ))}
                        </dd>
                    </dl>
                ))}
            </div>
        </section>)
}

export default GenreList