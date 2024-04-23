'use client'
import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image'
import { useUser } from '@clerk/nextjs'
import { UserButton } from "@clerk/nextjs";
import { ShoppingCart } from 'lucide-react'
import { CartContext } from '../_context/CartContext';
import CartApis from '../_Utils/CartApis';
import Cart from './Cart';
import Link from 'next/link'
const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState()
    const [openCart, setOpenCart] = useState(false)

    const { cart, setCart } = useContext(CartContext)
    useEffect(() => {
        setIsLoggedIn(window?.location?.href.toString().includes
            ('sign-in'))
    }, [])

    const { user } = useUser();

    useEffect(() => {
        user && getCartItems();
    }, [user])

    const getCartItems = () => {
        CartApis.getUserCartItems(user.primaryEmailAddress.emailAddress).then(res => {
            res?.data?.data.forEach(item => {
                setCart((oldCart) => [
                    ...oldCart,
                    {
                        id: item.id,
                        product: item?.attributes?.products?.data[0]
                    }
                ])
            })

        })
    }
    return (
        <header className=" bg-gray-900  py-3">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="md:flex md:items-center md:gap-12">
                        <div className="block text-teal-600 dark:text-teal-600" >
                            <span className="sr-only">Home</span>
                            <Link href='/'>
                                <Image src='/logo.svg' alt='logo' width={130} height={100} />
                            </Link>
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <nav aria-label="Global">
                            <ul className="flex items-center gap-6 text-md">
                                <li>
                                    <a
                                        className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                        href="#"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                        href="#"
                                    >
                                        Products
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                        href="#"
                                    >
                                        About
                                    </a>
                                </li>


                            </ul>
                        </nav>
                    </div>


                    <div className="flex items-center gap-4">
                        {!user ? <div className="sm:flex sm:gap-4">
                            <a
                                className="block w-full rounded border border-zinc-600  px-5 py-2.5 text-sm font-medium text-white hover:bg-transparent hover:bg-second dark:hover:text-white/75 focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                                href="/sign-in"
                            >
                                Login
                            </a>

                            <div className="hidden sm:flex">
                                <a
                                    className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                                    href="/sign-up"
                                >
                                    Register
                                </a>
                            </div>
                        </div>
                            :
                            <div className='flex items-center gap-8'>
                                <div onClick={() => setOpenCart(!openCart)}
                                    className='flex relative gap-1 cursor-pointer text-lg  w-full rounded border border-zinc-600  px-6 py-1.5  font-medium text-white hover:bg-transparent hover:bg-second dark:hover:text-white/75 focus:outline-none focus:ring active:text-opacity-75 sm:w-auto'
                                >
                                        <span onClick={() => setOpenCart(!openCart)}>cart</span>  

                                        <span className='absolute bottom-5 text-sm left-16 py-1 px-3 bg-second rounded-full'>{cart?.length}</span>
                                </div>
                                {openCart && <Cart />}
                                <UserButton afterSignOutUrl="/" />
                            </div>

                        }


                        <div className="block md:hidden">
                            <button
                                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                            >
                                <pan>Toggle menu</pan>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
