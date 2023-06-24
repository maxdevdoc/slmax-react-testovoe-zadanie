import React from 'react';
import {IoLogoOctocat } from 'react-icons/io';
import Link from 'next/link';
import module from '../style/header.module.css'


const Header = ({ Component, pageProps }) => {
    return (
        <header className={module.block_header}>
            <div className={module.log_style}>
                <IoLogoOctocat/>
            </div>
            <nav className={module.navbar_block}>
                <Link href='/dogs'>Dogs</Link>
                <Link href='/cats'>Cats</Link>
                <Link href='/'>Home</Link>
            </nav>
        </header>
    )
}

export default Header;