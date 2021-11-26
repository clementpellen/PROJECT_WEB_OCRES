import BackFrame from '../frames/BackFrame.js';
import ScrollingFrame from '../frames/ScrollingFrame.js';

import './LandingPage.css';

import child_animation from '../img/gif/child_animation.gif';

/* Page des différents segments clients */
const CHILD_BACKFRAME = "child-backframe";

/* Propositions de valeur des différents segments clients */
const CHILD_VALUE_PROPOSITION = "Ton terrain, tes potes, ton moment";

/* Animation des différents segments clients */
const CHILD_ANIMATION_ID = "child-animation-id";

/* Call To Action des différents segments clients */
const CHILD_CTA = "Nous Suivre";

/* Phrases d'accroche des différents segments clients */
const CHILD_TEASING_PROPOSITION = "Comment transformer ton école en stade Corner ? 👇";


function ChildLandingPage() {
    return(
        <div className='ChildLandingPage'>

            <BackFrame 
                backframe_id={CHILD_BACKFRAME} 
                value_proposition={CHILD_VALUE_PROPOSITION} 
                animation_id={CHILD_ANIMATION_ID}
                animation={child_animation}/>

            <div className='FrontFrame'>  
                <div className='transparent-block'/> 
                <ScrollingFrame className='ScrollingFrame' cta={CHILD_CTA} teaser_proposition={CHILD_TEASING_PROPOSITION}/>
            </div>

        </div>
    );
}

export default ChildLandingPage;