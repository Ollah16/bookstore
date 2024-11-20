import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaBookOpen } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { handleNavBtn } from "../myRedux/myActions";

const NavBottom = () => {

    const dispatch = useDispatch()
    const activeNav = useSelector(state => state.activeNav)

    return (
        <section className='navbottom d-md-none'>

            <div className='navbottom-div'>

                <div>
                    <button onClick={() => dispatch(handleNavBtn('menu'))}
                        className={activeNav === 'menu' ? 'active' : ''}
                    >
                        <GiHamburgerMenu size={18} />
                        <span>MENU</span>
                    </button>

                    <button onClick={() => dispatch(handleNavBtn('menu'))}
                        className={activeNav === 'menu' ? 'active' : ''}
                    >
                        <CgClose size={18} />
                        <span>CLOSE</span>
                    </button>
                </div>

                <div>
                    <button onClick={() => dispatch(handleNavBtn('search'))}
                        className={activeNav === 'search' ? 'active' : ''}
                    >
                        <IoSearch size={18} />
                        <label htmlFor='search'> SEARCH</label>
                    </button>

                    <button onClick={() => dispatch(handleNavBtn('search'))}
                        className={activeNav === 'search' ? 'active' : ''}
                    >
                        <CgClose size={18} />
                        <span>CLOSE</span>
                    </button>
                </div>

                <div>
                    <button onClick={() => dispatch(handleNavBtn('basket'))}
                        className={activeNav === 'basket' ? 'active' : ''}
                    >
                        <FaShoppingCart size={18} />
                        <span>BASKET</span>
                    </button>

                    <button onClick={() => dispatch(handleNavBtn('basket'))}
                        className={activeNav === 'basket' ? 'active' : ''}
                    >
                        <CgClose size={18} />
                        <span>CLOSE</span>
                    </button>

                </div>

                <div>
                    <button onClick={() => dispatch(handleNavBtn('bookery'))}
                        className={activeNav === 'bookery' ? 'active' : ''}>
                        <FaBookOpen size={18} />
                        <span>MY BOOKERY</span>
                    </button>

                    <button onClick={() => dispatch(handleNavBtn('bookery'))}
                        className={activeNav === 'bookery' ? 'active' : ''}
                    >
                        <CgClose size={18} />
                        <span>CLOSE</span>
                    </button>
                </div >
            </div>
        </section >
    )
}

export default NavBottom