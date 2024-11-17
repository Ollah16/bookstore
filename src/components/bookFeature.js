import React from 'react'
import BookRating from './bookRating'
import { RiSubtractFill } from 'react-icons/ri'
import { MdAdd } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { FaArrowRight } from 'react-icons/fa'

const BookFeature = ({ display, setAdd }) => {

    const viewedBook = useSelector(state => state.viewedBook)

    const handleClicks = (type) => {
        setAdd((prev) => type === 'description' && window.innerWidth > 792 ? type : prev === type ? null : type)
    }

    return (
        <div className='product-additions'>
            <div className='product-container'>
                <ul className={`product-ul ${display === 'description' ? 'active' : ''}`}>

                    <li>
                        <button onClick={() => handleClicks('description')} className={display === 'description' ? 'active' : ''}>
                            Product Description   <span><MdAdd className='svgopen' /><RiSubtractFill className='svgclose' /></span>
                        </button>
                    </li>

                    <li className={`product-description ${display == 'description' ? 'active' : ''}`}>
                        <p>{viewedBook.description} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras magna odio, ultrices in hendrerit ac,
                            tristique et dolor. Cras elementum quam urna, ut pretium mauris pharetra ut. Duis a venenatis odio. Mauris metus nulla,
                            sagittis vitae pretium sit amet, consequat sit amet massa. Suspendisse potenti. Cras vitae elementum ligula.
                            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                        </p>
                    </li>
                </ul>

                <ul className={`product-ul ${display == 'detail' ? 'active' : ''}`}>
                    <li>
                        <button onClick={() => handleClicks('detail')} className={display == 'detail' ? 'active' : ''}>Details <span><MdAdd className='svgopen' /><RiSubtractFill className='svgclose' /></span></button>
                    </li>

                    <li className={`product-details ${display == 'detail' ? 'active' : ''}`}>

                        <p>
                            Author: {viewedBook.author}<br></br>
                            ISBN-13978152668<br></br>
                            ISBN-10163788X<br></br>
                            Format: Hardback,<br></br>
                            Publisher: Bloomabu Publishing PLC<br></br>
                            Publication date: 26 Oct 2021<br></br>
                            Interest Age: 9 - 11 years<br></br>
                            Product dimensions: 161 x 235 x 51mm<br></br>
                            Weight: 1,146g<br></br>
                            Condition: New<br></br>
                            Language: English
                        </p>
                        <p> Categories<br></br>
                            {viewedBook.genre}</p>
                    </li>
                </ul>

                <ul className={`product-ul ${display == 'review' ? 'active' : ''}`}>
                    <li>
                        <button onClick={() => handleClicks('review')} className={display == 'review' ? 'active' : ''}>Review this book <span><MdAdd className='svgopen' /><RiSubtractFill className='svgclose' /></span></button>
                    </li>

                    <li className={`product-review ${display == 'review' ? 'active' : ''}`}>
                        <div>
                            <label className='d-block'>Review rating</label>
                            <BookRating />
                            <label className='d-block'>Review text</label>
                            <textarea className='w-100'>

                            </textarea>
                            <span className='border-0 d-block'><button className='review-button'><FaArrowRight size={15} className='mx-2' /> <span>Submit using my account</span> </button> <button ><FaArrowRight size={15} className='mx-2' /><span>Submit as a guest</span></button></span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>)
}

export default BookFeature