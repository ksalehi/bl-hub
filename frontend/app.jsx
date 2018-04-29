'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar.jsx';
import Homepage from './components/Homepage.jsx';
import AboutUs from './components/AboutUs.jsx';

$(document).ready(function () {
    console.log('--------other---------');
    ReactDOM.render(
        <NavBar />,
        document.getElementById('nav-bar-container')
    );

    switch (window.location.pathname) {
        case '/':
            ReactDOM.render(
                <Homepage />,
                document.getElementById('home')
            );
            break;
        case '/about-us':
            ReactDOM.render(
                <AboutUs />,
                document.getElementById('about-us')
            );
            break;
    }
});
