import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { TiStar } from "react-icons/ti";
import { GiWorld } from "react-icons/gi";
import { MdVerifiedUser } from "react-icons/md";
import axios from 'axios';
import OtherBooks from '../components/otherBooks';
import BookRating from '../components/bookRating';
import BookDetailsMobile from '../components/bookDetailsMobile';
import BookDetailsDekstop from '../components/bookDetailsDekstop';

export const loader = async ({ params }) => {

    try {
        const response = await axios.get(`https://book-store-back-end-three.vercel.app/store/viewmore/${params.bookId}`, null)
        const { viewedBook } = response.data
        return viewedBook
    } catch (err) {
        console.error(err)
    }
}


const ViewMore = () => {

    const viewedBook = useLoaderData()

    return (<Container fluid className='bookstore-container'>
        <section className='viewmore__section'>
            <section className='viewmore__content'>
                {viewedBook &&
                    <div className='viewedbook__container'>
                        <div className='bookdetails-section'>
                            <div className='viewed-book-details'>
                                <h2>{viewedBook.title}</h2>
                                <p>A <b style={{ color: 'green' }}>Hardback</b> edition by {viewedBook.author} in English</p>
                            </div>


                            <div className='image-cost-section'>
                                <div className='viewed-book-image' >

                                    <img alt={`Book Cover - ${viewedBook.title}`}
                                        src={`https://expressbuckett.s3.eu-west-2.amazonaws.com/bookstore/${viewedBook.cover}`}
                                        loading="lazy"
                                    />

                                </div>

                                <div className='cost-section'>
                                    <div className='cost-details'>
                                        <h2>
                                            <span>£7.99</span> <span>+ FREE delivery</span><br></br><span>RRP £8.99 <b>You save £1.00 (11%)</b></span>
                                        </h2>

                                        <p><span>You save</span> <span><b>11%</b></span> <span> off RRP!</span> </p>
                                    </div>

                                    <p style={{ fontWeight: 'bold', fontSize: '15px', letterSpacing: '-1.1px', color: '#004D40', margin: '0' }}>50+ available</p>


                                    <div className='basket-wish'>

                                        <button className='viewmore-to-basket' data-name={`Add ${viewedBook.title} to your basket`}> <FaShoppingCart size={18} /> <span>Add to basket</span></button>
                                        <p><FaHeart size={18} color='red' /> <span>Add to wishlist</span></p>
                                    </div>

                                    <div className='syn-div'><GiWorld size={20} /><span>FREE delivery to United Kingdom</span></div>

                                    <div className='syn-div'>
                                        <MdVerifiedUser size={20} />
                                        <span>Bookery has an Excellent rating of <b>4.7 on
                                            <TiStar className='mx-1 me-1 p-0' style={{ backgroundColor: 'green', color: 'white', borderRadius: '50%' }} size={15} />
                                            REVIEWS
                                        </b>
                                        </span>
                                    </div>

                                    <p className='description'><b>Short Description:</b> {viewedBook.description}</p>

                                </div>

                            </div>
                        </div>

                        <div className='bookrating-section'>
                            <div>
                                <BookRating size={25} />
                                <span>
                                    4.70 Average <br></br>
                                    83717 Reviews
                                </span>
                                <span>  <TiStar size={20}
                                    style={{ backgroundColor: 'black', color: 'white', borderRadius: '50%' }}
                                />REVIEWS.io</span>
                            </div>
                        </div>
                    </div>
                }
            </section>

            <BookDetailsMobile viewedBook={viewedBook} />
            <BookDetailsDekstop viewedBook={viewedBook} />

            <OtherBooks viewedBook={viewedBook} />
        </section>
    </Container >)
}
export default ViewMore;