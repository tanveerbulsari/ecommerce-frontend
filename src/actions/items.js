import {
  CREATE_ITEM,
  FETCH_ITEMS,
  UPDATE_ITEM
} from "./types";

import ItemsDataService from "../services/items.service";

export const createItem = (name, description, categoryId) => async (dispatch) => {
  try {
    const res = await ItemsDataService.create({ name, description, categoryId });

    dispatch({
      type: CREATE_ITEM,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const fetchAllProducts = () => async (dispatch) => {
  try {
    const res = await ItemsDataService.getAll();
    debugger
    dispatch({
      type: FETCH_ITEMS,
      payload: res.data.body.content,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateItem = (id, data) => async (dispatch) => {
  try {
    const res = await ItemsDataService.update(id, data);

    dispatch({
      type: UPDATE_ITEM,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

