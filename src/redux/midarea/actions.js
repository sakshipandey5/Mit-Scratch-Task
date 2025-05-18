import { SET_LIST, ADD_LIST,SWAP_MIDAREA_LISTS } from "./types";

export const updateList = (id, new_list) => {
  return {
    type: SET_LIST,
    list: new_list,
    id: id,
  };
};

export const addList = () => {
  return {
    type: ADD_LIST,
  };
};


export const swapMidAreaLists = (id1, id2) => ({
  type: SWAP_MIDAREA_LISTS,
  payload: { id1, id2 },
});