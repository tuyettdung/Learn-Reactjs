
const stateDefault = "./img/products/red-car.jpg";

export const imgCarReducer = (state = stateDefault, action) => {
    switch (action.type) {
      case "CHANGE_COLOR":{
        const {payload} = action;
        state = payload;
        return state
      }
      default:
        return state;
    }
  }