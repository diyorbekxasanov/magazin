import { initialState } from "../state/initialState";

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_TASK":
      let delet = [...state.savdoData];
      delet.splice(action.payload, 1);
      return { ...state, savdoData: delet };
    case "ADD_TASK":
      let savdoData1 = [...state.savdoData];
      savdoData1.unshift(action.payload);
      return { ...state, savdoData: savdoData1 };
    case "EDIT_TASK":
      let savdoData = [...state.savdoData];
      savdoData[action.payload.index] = action.payload.val;
      return { ...state, savdoData };

    default:
      return state;
  }
};
