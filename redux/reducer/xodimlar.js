import { initialState3 } from "../state/initialState";

export const xodim = (state = initialState3, action) => {
  switch (action.type) {
    case "DELETE_TASK_3":
      let delet = [...state.qarzData];
      delet.splice(action.payload, 1);
      return { ...state, qarzData: delet };
    case "ADD_TASK_3":
      let odamData1 = [...state.odamData];
      odamData1.push(action.payload);
      console.log(action.payload);
      return { ...state, odamData: odamData1 };
    case "ADD_TASK_3_QARZ":
      let qarzData1 = [...state.qarzData];
      qarzData1.unshift(action.payload);
      return { ...state, qarzData: qarzData1 };
    case "EDIT_TASK_3":
      let qarzData = [...state.qarzData];
      qarzData[action.payload.index] = action.payload.val;
      console.log(qarzData);
      return { ...state, qarzData };
    case "ACTIVE_TASK_3":
      let active = [...state.odamData];
      for (let i = 0; i < active.length; i++) {
        if (i == action.payload) {
          active[action.payload].act = true;
        } else {
          active[i].act = false;
        }
      }
      return { ...state, odamData: active };
    default:
      return state;
  }
};
