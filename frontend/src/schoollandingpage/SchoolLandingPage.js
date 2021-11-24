import BackFrame from '../frames/BackFrame.js';

/* Propositions de valeur des différents segments clients */
const CHILD_VALUE_PROPOSITION = "Ton terrain, tes potes, ton moment";
const PARENT_VALUE_PROPOSITION = "Le club pour jouer quand on veut, avec qui on veut, dans son lycée";
const SCHOOL_VALUE_PROPOSITION = "Il n'a jamais été aussi simple d'organiser un match de foot";

function SchoolLandingPage() {
    return <BackFrame value_proposition={SCHOOL_VALUE_PROPOSITION}/>;
}

export default SchoolLandingPage;