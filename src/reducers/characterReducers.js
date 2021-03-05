import characters_json from '../data/characters.json';
import {ADD_CHARACTER, REMOVE_CHARACTER} from '../action/index';
import {createCharacter} from './helper'

function characters (state = characters_json, action){
    let characters
    switch(action.type){
        case ADD_CHARACTER:
            characters = state.filter(items=> items.id !== action.id);
            return characters;

            case REMOVE_CHARACTER:
                characters = [...state,createCharacter(action.id) ]
            return characters;

        default:
        return state
    }
}


export default characters;