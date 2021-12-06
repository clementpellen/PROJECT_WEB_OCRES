import React from 'react';
import { Link } from 'react-router-dom';

import './Menu.css';

export default class Menu extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='Menu'>
                <button className='menu-indicator'>...</button>
                {/* <button className='menu-indicator'>Menu</button> */}

                <div class='menu'>
                    <Link to="/" className='link-menu'>Map</Link><br />
                    <Link to="/lpenfant" className='link-menu'>Landing Page Joueur</Link><br />
                    <Link to="/lpparent" className='link-menu'>Landing Page Parent</Link><br />
                    <Link to="/lpecole" className='link-menu'>Landing Page Ecole</Link><br />
                    <Link to="/media" className='link-menu'>Page Media</Link>
                </div>
            </div>
        );
    }

}