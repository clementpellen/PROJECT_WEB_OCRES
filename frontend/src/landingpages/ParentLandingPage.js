import BackFrame from '../frames/BackFrame.js';
import ScrollingFrame from '../frames/ScrollingFrame.js';

import './LandingPage.css';

import parent_animation from '../img/gif/parent_animation.gif';

/* Page des différents segments clients */
const PARENT_BACKFRAME = "parent-backframe";

/* Propositions de valeur des différents segments clients */
const PARENT_VALUE_PROPOSITION = "Le club pour jouer quand on veut, avec qui on veut, dans son lycée";

/* Animation des différents segments clients */
const PARENT_ANIMATION_ID = "parent-animation-id";

/* Call To Action des différents segments clients */
const PARENT_CTA = "Se préinscrire";

/* Phrases d'accroche des différents segments clients */
const PARENT_TEASING_PROPOSITION = "Pourquoi Corner est le club des lycéens ? 👇";

/* Widget des différents segments clients */
const NB_PARENT_FOLLOWERS_TOTAL = 232;

/* Description du Widget des différents segments clients */
const PARENT_DESCRIPTION_WIDGET = "parents satisfaits par notre service";


function ParentLandingPage() {
    return(
        <div className='ParentLandingPage'>
            
            <BackFrame className='BackFrame' 
                backframe_id={PARENT_BACKFRAME} 
                value_proposition={PARENT_VALUE_PROPOSITION} 
                animation_id={PARENT_ANIMATION_ID}
                animation={parent_animation}/>
            
            <div className='FrontFrame'>  
                <div className='transparent-block'></div>  
                
                <ScrollingFrame className='ScrollingFrame' 
                    cta={PARENT_CTA} 
                    teaser_proposition={PARENT_TEASING_PROPOSITION} 
                    nb_parent_followers={NB_PARENT_FOLLOWERS_TOTAL} 
                    description_widget={PARENT_DESCRIPTION_WIDGET}/>  

            </div>

        </div>
    );
}

export default ParentLandingPage;