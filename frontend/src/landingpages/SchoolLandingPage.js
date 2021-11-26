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

/* Call To Action des différents segments clients */
const SCHOOL_CTA = "Devenir Partenaire";

/* Phrases d'accroche des différents segments clients */
const SCHOOL_TEASING_PROPOSITION = "Qu'est-ce que Corner peut apporter à mon lycée ? 👇";

/* Widget des différents segments clients */
const NB_SCHOOL_FOLLOWERS_TOTAL = 18;

/* Description du Widget des différents segments clients */
const SCHOOL_DESCRIPTION_WIDGET = "lycées nous font déjà confiance";

function SchoolLandingPage() {
    return(
        <div className='SchoolLandingPage'>
            
            <BackFrame className='BackFrame' 
                backframe_id={SCHOOL_BACKFRAME} 
                value_proposition={SCHOOL_VALUE_PROPOSITION} 
                animation_id={SCHOOL_ANIMATION_ID}
                animation={school_animation} /> 
            
            <div className='FrontFrame'>  
                <div className='transparent-block'/> 
                
                <ScrollingFrame className='ScrollingFrame' 
                    cta={SCHOOL_CTA} 
                    teaser_proposition={SCHOOL_TEASING_PROPOSITION} 
                    nb_school_followers={NB_SCHOOL_FOLLOWERS_TOTAL} 
                    description_widget={SCHOOL_DESCRIPTION_WIDGET}/>

            </div>

        </div>
    );
}

export default SchoolLandingPage;