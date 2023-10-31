import { createSlice } from "@reduxjs/toolkit";
import { getRequest } from "../../services/httpRequest.js";

export const initialCategory = {
  listCategories: [],
  listCategoriesSelected: []
};

export const categorySlice = createSlice({
  name: "category",
  initialState: initialCategory,

  reducers: {
    setListCategories: (state, action) => {
      state.listCategories = action.payload;
    },
    addCategoryToSelect: (state, action) => {
      let category = action.payload;
      if (category) {
        state.listCategoriesSelected = [...state.listCategoriesSelected, category];
      }
    },
    removeCategoryFromSelect: (state, action) => {
      let id = action.payload;
      state.listCategoriesSelected = state.listCategoriesSelected.filter(item => item._id !== id);
    },
    clearAllCategory: state => {
      state.listCategoriesSelected = [];
    }
  }
});

export const {
  setListCategories,
  addCategoryToSelect,
  removeCategoryFromSelect,
  clearAllCategory
} = categorySlice.actions;

export default categorySlice.reducer;

export const listCategories = () => async dispatch => {
  try {
    const categories = await getRequest("/category");
    if (categories.length > 0) {
      dispatch(setListCategories(categories));
    }
  } catch (error) {
    return { login: false, msg: error.toString() };
  }
};
