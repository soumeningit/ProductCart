import React from 'react'
import { BsCart } from "react-icons/bs";
import { useSelector } from 'react-redux';
import { NavLink, useSearchParams } from 'react-router-dom';

function NavBar() {

    const cart = useSelector((state) => state.cart);
    return (
        <div>
            <nav className='flex justify-between items-center h-20 max-w-6xl mx-auto'>
                <NavLink to="/">
                    <div className='ml-5'>
                        <img src="https://th.bing.com/th/id/OIG2.eejkitEMhSalqLtYrRRO?pid=ImgGn" alt="logo" className='h-16 w-20' />
                    </div>
                </NavLink>
                <div className='flex items-center font-bold text-slate-100 mr-5 space-x-6'>
                    <NavLink to="/">
                        <p>Home</p>
                    </NavLink>

                    <NavLink to="/cart">
                        <div className='relative'>
                            <BsCart className='font-bold text-xl' />
                            {
                                cart && cart.length > 0 &&
                                <span className='absolute -top-1 -right-2 bg-green-500 text-xs w-5 h-5 flex
                                justify-center items-center animate-bounce rounded-full text-white'
                                >
                                    {cart.length}
                                </span>
                            }

                        </div>
                    </NavLink>
                </div>

            </nav>
        </div>
    )
}

export default NavBar 