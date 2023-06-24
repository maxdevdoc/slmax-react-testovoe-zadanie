import React from 'react';
import {IoLogoOctocat } from 'react-icons/io';
import module from '../style/footer.module.css'
const Footer = () => {
    return (
        <footer className={module.footer_wrap}>
            <div className={module.logo_footer}>
                <IoLogoOctocat/>
            </div>
            <div className={module.copyright_style}>
                Copyright 2023 for stilledimaks
            </div>
        </footer>
    )
}

export default Footer;