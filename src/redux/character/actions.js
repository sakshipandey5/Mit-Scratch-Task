import { ADD_CHARACTER, SET_ACTIVE_CHARACTER, SET_ANGLE, SWAP_MIDAREA_LISTS } from "./actionTypes";
import { SET_ACTIVE_SPRITE } from "./actionTypes";
export const setCharacterAngle = (characterAngle) => {
  return {
    type: SET_ANGLE,
    angle: characterAngle,
  };
};

export const setActive = (character_id) => {
  return {
    type: SET_ACTIVE_CHARACTER,
    id: character_id,
  };
};

export const addCharacter = () => {
  return {
    type: ADD_CHARACTER,
  };
};

// src/redux/character/actions.js

export const setActiveSprite = (spriteId) => ({
  type: SET_ACTIVE_SPRITE,
  payload: spriteId,
});


export const swapMidAreaLists = (id1, id2) => ({
  type: SWAP_MIDAREA_LISTS,
  payload: { id1, id2 },
});
