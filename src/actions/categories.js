import {
    FETCH_CATEGORIES
  } from "./types";
  
  import ItemsDataService from "../services/items.service";
  
  export const fetchAllCategories = () => async (dispatch) => {
    try {
      const res = await ItemsDataService.getCategories()
      debugger
      dispatch({
        type: FETCH_CATEGORIES,
        categories: res.data.body.categories
      });
    }
    catch (err) {
      console.log(err);
    }
  };