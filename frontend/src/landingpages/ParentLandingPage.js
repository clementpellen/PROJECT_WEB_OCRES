import BackFrame from '../frames/BackFrame.js';
import ScrollingFrame from '../frames/ScrollingFrame.js';

import parent_animation from '../img/gif/parent_animation.gif';

/* Page des différents segments clients */
const PARENT_BACKFRAME = "parent-backframe";

/* Propositions de valeur des différents segments clients */
const PARENT_VALUE_PROPOSITION = "Le club pour jouer quand on veut, avec qui on veut, dans son lycée";

/* Animation des différents segments clients */
const PARENT_ANIMATION_ID = "parent-animation-id";

/* Phrases d'accroche des différents segments clients */
const PARENT_TEASING_PROPOSITION = "Pourquoi Corner est le club des lycéens ? 👇";


function ParentLandingPage() {
    return(
        <BackFrame 
            backframe_id={PARENT_BACKFRAME} 
            value_proposition={PARENT_VALUE_PROPOSITION} 
            animation_id={PARENT_ANIMATION_ID}
            animation={parent_animation}/>
        // <ScrollingFrame teaser_proposition={PARENT_TEASING_PROPOSITION}/>
    );
}

export default ParentLandingPage;