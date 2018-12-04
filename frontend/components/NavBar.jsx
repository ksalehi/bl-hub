import React from 'react';
import NavTab from './NavTab.jsx';
import Homepage from './Homepage.jsx';
import AboutUs from './AboutUs.jsx';
import NavTabDropdown from './NavTabDropdown.jsx';

class NavBar extends React.PureComponent {
    constructor(props) {
        super(props);
         this.tabs = [
            {
                title: 'SYMPOSIUM',
                link: '/symposium',
                options: [
                    {
                        title: 'Schedule',
                        link: '/symposium/schedule'
                    },
                    {
                        title: 'Poster Guidelines',
                        link: '/symposium/poster-guidelines'
                    },
                    {
                        title: 'Directions',
                        link: '/symposium/directions'
                    },
                ]
            },
            {
                title: 'WORKSHOPS',
                link: '/workshops'
            },
            {
                title: 'EMISSARIES',
                link: '/research/emissaries'
            },
            {
                title: 'EDUCATION',
                link: '/education'
            },
            {
                title: 'PRACTICUM',
                link: '/mbl',
                options: [
                    {
                        title: 'FAQs',
                        link: '/mbl/faqs'
                    },
                    {
                        title: '2018 Practicum',
                        link: '/mbl/2018-practicum'
                    },
                    {
                        title: 'Apply',
                        link: '/mbl/apply'
                    },
                ]
            },
            {
                title: 'DATA',
                link: '/data'
            },
            {
                title: 'ABOUT',
                link: '/about-us'
            },
            {
                title: 'CONTACT',
                link: '/contact-us'
            }
        ];

        this.renderTabs = this.renderTabs.bind(this);
    }

    isCurrentTab(tab) {
        if (tab.title == 'MBL Practicum') {
            return window.location.pathname.match('/mbl/');
        }

        let isActive = false;
        for(let i=0; i<tab.options.length; i++) {
            if (tab.options[i].link == window.location.pathname) {
                isActive = true;
                break;
            }
        }

        return isActive;
    }

    renderTabs(tabs) {
        return tabs.map((tab, idx) => {
            if (tab.options) {
                return (
                    <NavTabDropdown
                        key={idx}
                        titleLink={tab.link}
                        title={tab.title}
                        options={tab.options}
                        isActive={this.isCurrentTab(tab)}
                    />
                );
            } else {
                return (
                    <NavTab
                        key={idx}
                        title={tab.title}
                        isActive={tab.link == window.location.pathname}
                        link={tab.link}
                    />
                );
            }
        });
    }

    render() {
        let logoSrc = 'https://s3.amazonaws.com/bl-hub/brain_black.png';
        if (this.props.isHomepage) {
            logoSrc ='https://s3.amazonaws.com/bl-hub/brain.png';
        }

        return (
            <div>
                <a href='/'>
                    <h1 className='header float-left'>The Bioluminescence Hub</h1>
                    <img className='header__logo' src={logoSrc}/>
                </a>
                <div className='bl-nav-bar-wrapper clearfix'>
                    <ul className='bl-nav-bar'>
                        {this.renderTabs(this.tabs)}
                    </ul>
                </div>
            </div>
        );
    }
}

export default NavBar;
