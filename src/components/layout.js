import PropTypes from 'prop-types';
import React from 'react';

import Header from './header';

function Layout({ children }) {
    return (
        <div className="flex flex-col font-mono min-h-screen bg-white leading-relaxed">
            <Header />

            <main className="flex flex-col flex-1 mx-auto p-12 w-full">{children}</main>

            <footer className="bg-blue-700">
                <nav className="flex justify-between max-w-4xl mx-auto p-4 md:p-8 text-sm">
                    <p className="text-white">TJHSST sysadmins.</p>
                </nav>
            </footer>
        </div>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
