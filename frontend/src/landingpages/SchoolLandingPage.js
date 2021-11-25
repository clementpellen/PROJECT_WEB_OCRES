import BackFrame from '../frames/BackFrame.js';
import ScrollingFrame from '../frames/ScrollingFrame.js';

import './LandingPage.css';

import school_animation from '../img/gif/school_animation.gif';

/* Page des différents segments clients */
const SCHOOL_BACKFRAME = "school-backframe";

/* Propositions de valeur des différents segments clients */
const SCHOOL_VALUE_PROPOSITION = "Il n'a jamais été aussi simple d'organiser un match de foot";

/* Animation des différents segments clients */
const SCHOOL_ANIMATION_ID = "school-animation-id";

/* Phrases d'accroche des différents segments clients */
const SCHOOL_TEASING_PROPOSITION = "Qu'est-ce que Corner peut apporter à mon lycée ? 👇";


function SchoolLandingPage() {
    return(
        <div className='SchoolLandingPage'>
            
            <BackFrame className='BackFrame' 
                backframe_id={SCHOOL_BACKFRAME} 
                value_proposition={SCHOOL_VALUE_PROPOSITION} 
                animation_id={SCHOOL_ANIMATION_ID}
                animation={school_animation}/> 
            
            <div className='FrontFrame'>  
                <div className='transparent-block'/> 
                <ScrollingFrame className='ScrollingFrame' teaser_proposition={SCHOOL_TEASING_PROPOSITION}/>
            </div>

        </div>
    );
}

export default SchoolLandingPage;