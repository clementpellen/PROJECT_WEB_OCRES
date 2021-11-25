import BackFrame from '../frames/BackFrame.js';
import ScrollingFrame from '../frames/ScrollingFrame.js';

/* Propositions de valeur des différents segments clients */
const CHILD_VALUE_PROPOSITION = "Ton terrain, tes potes, ton moment";
const PARENT_VALUE_PROPOSITION = "Le club pour jouer quand on veut, avec qui on veut, dans son lycée";
const SCHOOL_VALUE_PROPOSITION = "Il n'a jamais été aussi simple d'organiser un match de foot";

/* Phrases d'accroche des différents segments clients */
const CHILD_TEASING_PROPOSITION = "Comment transformer ton école en stade Corner ? 👇";
const PARENT_TEASING_PROPOSITION = "Pourquoi Corner est le club des lycéens ? 👇";
const SCHOOL_TEASING_PROPOSITION = "Qu'est-ce que Corner peut apporter à mon lycée ? 👇";


function SchoolLandingPage() {
    return(
        <BackFrame value_proposition={SCHOOL_VALUE_PROPOSITION}/>
        // <ScrollingFrame teaser_proposition={SCHOOL_TEASING_PROPOSITION}/>
    );
}

export default SchoolLandingPage;