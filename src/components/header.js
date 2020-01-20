import React, { useState } from 'react';
import { Link } from 'gatsby';

import Logo from '../images/logo.png';

const Header = () => (
    <header className="p-6 bg-white border-gray-300 border-b shadow">
        <Link className="flex items-center" to="/">
            <img src={Logo} alt="Logo" className="h-12 mr-6" />
            <h1 className="text-3xl text-gray-800">
                TJ{' '}
                <span className="font-bold text-gray-900 inline-block">
                    <span className="hidden md:block">Computer Systems Lab</span>
                    <span className="block md:hidden">CSL</span>
                </span>
            </h1>
        </Link>
    </header>
);

export default Header;
