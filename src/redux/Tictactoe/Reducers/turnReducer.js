//Gestiona el turno

import { PLAYER0, PLAYERX } from "../constants";

function turnReducer(state=PLAYERX, action){
    switch(action.type){
        case 'PLAY_POSITION':
            return action.turn === PLAYERX ? PLAYER0 : PLAYERX;
        case 'RESET':
            return PLAYERX;
        default:
            return state;
    }
}
export default turnReducer;