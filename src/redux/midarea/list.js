// import { ADD_LIST, SET_LIST } from "./types";

// const initialState = {
//   midAreaLists: [
//     {
//       id: "midAreaList-0",
//       comps: ["MOVE"],
//     },
//   ],
// };

// export const listReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case SET_LIST:
//       let index = state.midAreaLists.findIndex((x) => x.id === action.id);
//       let all_lists = state.midAreaLists;
//       let [item] = all_lists.splice(index, 1);
//       item.comps = action.list;
//       all_lists.splice(index, 0, item);

//       return {
//         midAreaLists: all_lists,
//       };

//     case ADD_LIST:
//       let old_list = state.midAreaLists;
//       let new_list_add = {
//         id: `midAreaList-${state.midAreaLists.length}`,
//         comps: ["MOVE"],
//       };
//       old_list.push(new_list_add);
//       return {
//         midAreaLists: old_list,
//       };

//     default:
//       return state;
//   }
// };
import { ADD_LIST, SET_LIST, SET_PLAY_ALL_LIST, SWAP_MIDAREA_LISTS  } from "./types";

const initialState = {
  midAreaLists: [
    {
      id: "midAreaList-0",
      comps: ["MOVE"],
    },
  ],
  playAllList: {
    id: "playAllList",
    comps: [],
  },
};

export const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIST: {
      let index = state.midAreaLists.findIndex((x) => x.id === action.id);
      let all_lists = [...state.midAreaLists];
      let [item] = all_lists.splice(index, 1);
      item.comps = action.list;
      all_lists.splice(index, 0, item);

      return {
        ...state,
        midAreaLists: all_lists,
      };
    }



    case SWAP_MIDAREA_LISTS: {
  const { id1, id2 } = action.payload;
  const newLists = state.midAreaLists.map(list => ({ ...list }));
  const idx1 = newLists.findIndex(l => l.id === id1);
  const idx2 = newLists.findIndex(l => l.id === id2);
  if (idx1 > -1 && idx2 > -1) {
    const temp = newLists[idx1].comps;
    newLists[idx1].comps = newLists[idx2].comps;
    newLists[idx2].comps = temp;
  }
  return { ...state, midAreaLists: newLists };
}

    case ADD_LIST: {
      let old_list = [...state.midAreaLists];
      let new_list_add = {
        id: `midAreaList-${state.midAreaLists.length}`,
        comps: ["MOVE"],
      };
      old_list.push(new_list_add);
      return {
        ...state,
        midAreaLists: old_list,
      };
    }

    case SET_PLAY_ALL_LIST: {
      // action.list is the new comps array for playAllList
      return {
        ...state,
        playAllList: {
          ...state.playAllList,
          comps: action.list,
        },
      };
    }

    default:
      return state;
  }
};