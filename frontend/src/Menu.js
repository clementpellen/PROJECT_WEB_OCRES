import React from 'react';
import { Link } from 'react-router-dom';

import './Menu.css';

export default class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visibility_menu : false, 
            display_value : 'none'
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            visibility_menu : !prevState.visibility_menu
        }));

        if(this.state.visibility_menu) {
            this.setState({display_value : 'flex'});
        }
        else {
            this.setState({display_value : 'none'});
        }
    }

    render() {
        return(
            <div className='Menu'>
                <button className='menu-indicator' onClick={this.handleClick}>...</button>
                {/* <button className='menu-indicator'>Menu</button> */}

                <div className='menu' style={{display : this.state.display_value}}>
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