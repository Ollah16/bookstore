import React, { useRef } from 'react';
import { Container } from 'react-bootstrap';
import { useEffect } from 'react';
import { TiStar } from "react-icons/ti";
import { FaTruck } from "react-icons/fa6";
import { GiBookPile } from "react-icons/gi";

import Allbooks from '../components/allbooks';
import SearchedBook from '../components/searchedBook';
import Genreclass from '../components/genreclass';
import { useDispatch, useSelector } from 'react-redux';
import { handleNavBtn } from '../myRedux/myActions';
import { BookLoaderComponent } from '../components/bookloader';

const BookStorePage = ({
    handleLogout,
}) => {

    const dispatch = useDispatch()
    const bookstoreBodyRef = useRef(null)
    const containerRef = useRef(null)
    const activeNav = useSelector(state => state.activeNav)
    const searchedBook = useSelector(state => state.searchedBook)
    const allBooks = useSelector(state => state.allBooks)

    useEffect(() => {
        const checkSearch = activeNav && activeNav !== 'search'
        if (containerRef.current) containerRef.current.style.position = checkSearch ? 'fixed' : 'relative'
    }, [activeNav])

    useEffect(() => {
        const bookStoreRef = bookstoreBodyRef.current
        const handleCloseNavs = () => dispatch(handleNavBtn(null))
        bookStoreRef.addEventListener('click', handleCloseNavs)
        return () => bookStoreRef.removeEventListener('click', handleCloseNavs)
    }, [dispatch])

    return (<Container fluid ref={containerRef} >

        <div ref={bookstoreBodyRef}>
            <div className='main-content-div'>
                {allBooks.length > 0 && !searchedBook.length > 0 ?
                    <Allbooks />
                    : searchedBook.length > 0 ?
                        <SearchedBook /> :
                        <BookLoaderComponent />
                }

                <Genreclass />

                <section className='books-usps'>
                    <div>
                        <ul>
                            <li>
                                <span><FaTruck size={50} /></span>
                                <p>
                                    <span><b>Free</b> worldwide <b>delivery</b></span> <br></br>
                                    available with every order
                                </p>
                            </li>
                            <li>
                                <span><GiBookPile size={50} /></span>
                                <p>
                                    <span>Over <b>10 million</b></span><br></br>
                                    books available online
                                </p>
                            </li>

                            <li>
                                <span><TiStar size={50} /></span>
                                <p>
                                    <span>7,000+ <b>5 star reviews</b></span><br></br>
                                    on <span><TiStar className='mb-1' size={15} style={{ backgroundColor: 'green', color: 'white', borderRadius: '50%' }} /></span> REVIEWS
                                </p>
                            </li>

                        </ul>
                    </div>
                </section>

            </div >
        </div>


    </Container >
    )
}
export default BookStorePage;