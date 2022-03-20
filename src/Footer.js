import React from 'react';
import './Footer.css';

function Footer(props) {
    return (
        <div>
             <div className='footer'>
            <img className='footer_image'
            src = "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo" />
            </div>
            <p>Terms and Privacy Notice Send us feedbackHelp© 1996-2022, NetFlix.com, Inc. or its affiliates</p>
            
        </div>
    );
}

export default Footer;