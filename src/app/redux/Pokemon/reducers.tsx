const initialState = {
  sourceListData: null,
  filterListData: null,
  stockTrackingListData: null,
  items: []
};

interface Action {
  type: string;
  payload?: any;
  items?: []
}

import actions from "./actions";

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case actions.GET_ALL_POKEMON_LIST: {
      return {
        ...state,
        sourceListData: action.payload,
        items:action.items
      }
    }

    default:
      return state;
  }
};

export default reducer;
