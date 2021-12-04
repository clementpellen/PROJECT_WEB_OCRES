import BackFrame from '../frames/BackFrame.js';
import ScrollingFrame from '../frames/ScrollingFrame.js';

import '../Parallax.css';

import school_animation from '../img/gif/school_animation.gif';
import React from 'react';

/* Page des différents segments clients */
const SCHOOL_BACKFRAME = "school-backframe";

/* Propositions de valeur des différents segments clients */
const SCHOOL_VALUE_PROPOSITION = "Il n'a jamais été aussi simple d'organiser un match de foot";

/* Animation des différents segments clients */
const SCHOOL_ANIMATION_ID = "school-animation-id";

/* Call To Action des différents segments clients */
const SCHOOL_CTA = "Devenir Partenaire";

/* Phrases d'accroche des différents segments clients */
const SCHOOL_TEASING_PROPOSITION = "Qu'est-ce que Corner peut apporter à mon lycée ? 👇";

/* Description du Widget des différents segments clients */
const SCHOOL_DESCRIPTION_WIDGET = "lycées nous font déjà confiance";

class SchoolLandingPage extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {transparent_block_height : 0}
    }

    componentWillMount() {
        this.setState({
            transparent_block_height : window.innerHeight - 185
        });
    }
    
    render() {

        var style = this.state.transparent_block_height + 'rem';

        return(
            <div className='SchoolLandingPage'>
                
                <BackFrame className='BackFrame' 
                    backframe_id={SCHOOL_BACKFRAME} 
                    value_proposition={SCHOOL_VALUE_PROPOSITION} 
                    animation_id={SCHOOL_ANIMATION_ID}
                    animation={school_animation} /> 
                
                <div className='FrontFrame'>  
                    <div className='transparent-block' style={{height : style}}/> 
                    
                    <ScrollingFrame
                        cta={SCHOOL_CTA} 
                        teaser_proposition={SCHOOL_TEASING_PROPOSITION} 
                        widget_type={"schools"} 
                        description_widget={SCHOOL_DESCRIPTION_WIDGET}/>

                </div>

            </div>
        );
    }

}

export default SchoolLandingPage;