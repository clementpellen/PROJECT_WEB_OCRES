import BackFrame from '../frames/BackFrame.js';
import ScrollingFrame from '../frames/ScrollingFrame.js';

import child_animation from '../img/gif/child_animation.gif';

/* Page des différents segments clients */
const CHILD_BACKFRAME = "child-backframe";

/* Propositions de valeur des différents segments clients */
const CHILD_VALUE_PROPOSITION = "Ton terrain, tes potes, ton moment";

/* Animation des différents segments clients */
const CHILD_ANIMATION_ID = "child-animation-id";

/* Phrases d'accroche des différents segments clients */
const CHILD_TEASING_PROPOSITION = "Comment transformer ton école en stade Corner ? 👇";


function ChildLandingPage() {
    return(
        <BackFrame 
            backframe_id={CHILD_BACKFRAME} 
            value_proposition={CHILD_VALUE_PROPOSITION} 
            animation_id={CHILD_ANIMATION_ID}
            animation={child_animation}/>
        // <ScrollingFrame teaser_proposition={CHILD_TEASING_PROPOSITION}/>
    );
}

export default ChildLandingPage;