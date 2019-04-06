import React from 'react';

import '../styles.css';

const Header = () => {
    return (
        <div>
            <div className="ui menu">
                <div className="active blue header item">
                    VideoTube
                </div>
                <a className="item">
                    <i className="home icon"></i>
                    Home
                </a>
                <a className="item">
                    <i className="info icon"></i>
                    About 
                </a>
            </div>
        </div>
    )
}


export default Header;