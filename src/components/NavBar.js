import React, { useEffect, useRef, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { clearSearch, handleAllSearch, handleSorting } from "../myRedux/myActions";
import { useLocation, useNavigate } from "react-router-dom";
import GenreList from "./genreList";

const NavBar = () => {

    const searchedBook = useSelector(state => state.searchedBook)
    const allBooks = useSelector(state => state.allBooks)
    const [showGenre, setShowGenre] = useState(true)
    const dispatch = useDispatch()
    let [searchValue, setSearchInp] = useState('')
    let prevScrollPos = window.pageYOffset;
    const location = useLocation();
    const navigate = useNavigate()
    const navbarRef = useRef(null)
    const [viewMorePath, setPath] = useState(location.pathname.includes('viewmore'))

    useEffect(() => {
        setShowGenre(!viewMorePath)
    }, [location])

    useEffect(() => {
        if (allBooks.length) return dispatch(handleSorting())
    }, [dispatch, allBooks])

    useEffect(() => {
        const handleScroll = () => {
            let currentScrollPos = window.pageYOffset;
            const checkScroll = prevScrollPos > currentScrollPos && navbarRef.current && !viewMorePath
            setShowGenre(checkScroll)
            prevScrollPos = currentScrollPos;
        };

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)

    }, [])

    useEffect(() => {
        const handleClearSearchOnNavigate = () => {
            setSearchInp('')
            dispatch(clearSearch())
        }

        handleClearSearchOnNavigate()

    }, [location, dispatch])


    return (
        <nav ref={navbarRef} expand="lg" className='bookstore-nav'>
            <section className='nav-brand-div'>
                <div onClick={() => navigate('/')}>
                    <h2>Bookery</h2>
                    <p>Your Online Bookshop</p>
                </div>

                <div className='search-col'>
                    <input
                        value={searchValue}
                        className='search-input'
                        type="text"
                        id='search'
                        placeholder='Search by title, author, keyword....'
                        onInput={(e) => setSearchInp(e.target.value)}
                    />

                    {searchedBook && <button className='clear-search' onClick={clearSearch}>X</button>}
                    <button onClick={() => dispatch(handleAllSearch(searchValue))}>Search <IoSearch size={20} /></button>
                </div>

                <div className='icons'>
                    <span data-name='cart'>
                        <FaShoppingCart size={18} />
                        <sup>0</sup>
                    </span>
                    <span data-name='wishlist'>
                        <FaHeart size={18} />
                    </span>
                </div>
            </section>

            <GenreList showGenre={showGenre} />
        </nav >
    )
}

export default NavBar