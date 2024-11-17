import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { useSelector } from 'react-redux';

const Genreclass = () => {
    const booksByGenre = useSelector(state => state.booksByGenre)

    return (
        <section className='genre-container'>
            <ul>
                {Object.entries(booksByGenre).slice(0, 6).map(([genre, genreBooks]) => {
                    let image = genreBooks.find((img) => img.cover)

                    return (
                        <li key={genre}>

                            <div>
                                <img
                                    src={`https://expressbuckett.s3.eu-west-2.amazonaws.com/bookstore/${image.cover}`}
                                    alt={image.title} />
                            </div>

                            <div> <span>{genre}</span> <span><MdOutlineKeyboardArrowRight size={20} /></span></div>

                        </li>

                    )
                })}

            </ul>
        </section>)
}

export default Genreclass