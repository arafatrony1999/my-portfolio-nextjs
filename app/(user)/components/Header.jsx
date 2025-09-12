"use client"

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { BsSearch, BsXLg } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { usePathname } from 'next/navigation';


export default function Header() {
    const [active, setActive] = useState(false);
    

    const handleClick = () => {
        setActive(!active)
    }

    const pathname = usePathname();

    return(
        <>
            <div className='front-header'>
                <Image height={40} width={40} className="py-3 responsive-logo img-fluid" src="/images/formal.jpg" alt="Arafat Rony" />
                <Image height={100} width={180} className='main-logo' src="/images/logo.png" alt="Arafat Rony" />

                <div className="menu-bar-icon" onClick={handleClick}>
                    <FaBars />
                </div>

                <div className="header-links">
                    <ul className={ active ? 'active' : undefined }>
                        <div className="cross-btn-container">
                            <div className="menu-bar-icon menu-bar-ul" onClick={handleClick}>
                                <BsXLg />
                            </div>
                        </div>

                        <li>
                            <Link onClick={handleClick} className={pathname === '/' ? 'active' : undefined} href='/'>Home</Link>
                        </li>
                        <li>
                            <Link onClick={handleClick} className={pathname === '/portfolios' ? 'active' : undefined} href='/portfolios'>Portfolios</Link>
                        </li>
                        <li>
                            <Link onClick={handleClick} className={pathname === '/blogs' ? 'active' : undefined} href='/blogs'>Blogs</Link>
                        </li>
                        <li>
                            <Link onClick={handleClick} className={pathname === '/services' ? 'active' : undefined} href='/services'>Services</Link>
                        </li>
                        <li>
                            <Link onClick={handleClick} className={pathname === '/reviews' ? 'active' : undefined} href='/reviews'>Reviews</Link>
                        </li>
                        <li>
                            <Link onClick={handleClick} className={pathname === '/pricing' ? 'active' : undefined} href='/pricing'>Pricing</Link>
                        </li>
                        <li>
                            <Link onClick={handleClick} className={pathname === '/contacts' ? 'active' : undefined} href='/contacts'>Contacts</Link>
                        </li>
                    </ul>
                </div>

                {/* <div className="header-search">
                    <input type="text" placeholder='Search...' />
                    <button className="text-center">
                        <BsSearch className="text-center"/>
                    </button>
                </div> */}

                <div className="header-search d-flex">
                    <input type="text" placeholder="Search" />
                    <button>
                        <BsSearch />
                    </button>
                </div>
            </div>
            <div className="header-hide"></div>
        </>
    )
}