import React, { useState } from 'react'
import { MdAdd } from 'react-icons/md'
import { RiSubtractFill } from 'react-icons/ri'
import BookRating from './bookRating'
import { FaArrowRight } from 'react-icons/fa'
import Button from './button'

const BookDetailsMobile = ({ viewedBook }) => {
    const [currFeature, setFeature] = useState('')

    return (
        <div className='product__ulsm'>
            <ul className={`product-ul ${currFeature === 'descriptionmd' ? 'active' : ''}`}>

                <li>
                    <button onClick={() => setFeature((prev) => prev === 'description' ? null : 'description')} className={currFeature === 'description' ? 'active' : ''}>
                        Product Description   <span><MdAdd className='svgopen' /><RiSubtractFill className='svgclose' /></span>
                    </button>
                </li>

                <li className={`product-description ${currFeature == 'description' ? 'active' : ''}`}>
                    <p>{viewedBook.description} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras magna odio, ultrices in hendrerit ac,
                        tristique et dolor. Cras elementum quam urna, ut pretium mauris pharetra ut. Duis a venenatis odio. Mauris metus nulla,
                        sagittis vitae pretium sit amet, consequat sit amet massa. Suspendisse potenti. Cras vitae elementum ligula.
                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                    </p>
                </li>
            </ul>

            <ul className={`product-ul ${currFeature == 'detail' ? 'active' : ''}`}>
                <li>
                    <button onClick={() => setFeature((prev) => prev === 'detail' ? null : 'detail')} className={currFeature == 'detail' ? 'active' : ''}>Details <span><MdAdd className='svgopen' /><RiSubtractFill className='svgclose' /></span></button>
                </li>

                <li className={`product-details ${currFeature == 'detail' ? 'active' : ''}`}>

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

            <ul className={`product-ul ${currFeature == 'review' ? 'active' : ''}`}>
                <li>
                    <button onClick={() => setFeature((prev) => prev === 'review' ? null : 'review')} className={currFeature == 'review' ? 'active' : ''}>Review this book <span><MdAdd className='svgopen' /><RiSubtractFill className='svgclose' /></span></button>
                </li>

                <li className={`product-review ${currFeature == 'review' ? 'active' : ''}`}>
                    <div>
                        <label className='d-block'>Review rating</label>
                        <BookRating size={20} />
                        <label className='d-block'>Review text</label>
                        <textarea className='w-100'>

                        </textarea>
                        <span >
                            <Button svg={<FaArrowRight size={15} className='mx-2' />} value={"Submit using my account"} className={'review__button'} />
                            <Button svg={<FaArrowRight size={15} className='mx-2' />} value={"Submit as a guest"} className={'review__button'} />
                        </span>
                    </div>
                </li>
            </ul>
        </div>)
}

export default BookDetailsMobile