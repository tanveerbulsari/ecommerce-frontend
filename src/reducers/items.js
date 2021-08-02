import {
  CREATE_ITEM,
  FETCH_ITEMS,
  UPDATE_ITEM
} from "../actions/types";

const initialState = [];

function itemReducer(items = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_ITEM:
      return [...items, payload];

    case FETCH_ITEMS:
      return payload;

    case UPDATE_ITEM:
      return items.map((item) => {
        if (item.id === payload.id) {
          return {
            ...item,
            ...payload,
          };
        } else {
          return item;
        }
      });

   
    default:
      return items;
  }
};

export default itemReducer;