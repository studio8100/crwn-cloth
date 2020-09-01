import React from 'react';
//import App from '../../App';
import Directory from '../../components/directory/directory.componet';
import './homepage.styles.scss';

const HomePage = () => (
    <div className='homePage'>
        <div className='directory-menu'>
            <Directory />
        </div>
    </div>
);

export default HomePage;


