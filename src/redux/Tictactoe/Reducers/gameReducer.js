//Gestiona values

import { VALUES,PLAYERX } from "../constants";

function gameReducer(state=VALUES,action){
    switch(action.type){
        case 'PLAY_POSITION':
            let newValue = action.turn === PLAYERX ? 'X' : '0';
            let newState = JSON.parse(JSON.stringify(state));
            newState[action.x][action.y] = newValue;
            return newState;
        case 'RESET':
            return VALUES;
        default:
            return state;
    }
}
export default gameReducer;