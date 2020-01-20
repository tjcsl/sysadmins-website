import React, { useState } from 'react';

import Logo from '../images/logo.png';

const Footer = () => (
    <footer className="my-12 px-6 py-6 flex flex-col items-center justify-center text-center">
        <img src={Logo} alt="Logo" className="h-30 mb-6" />
        <h1 className="block text-3xl text-gray-800 mb-3">Computer Systems Lab</h1>
        <p>Thomas Jefferson High School for Science and Technology</p>
    </footer>
);

export default Footer;
