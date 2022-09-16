import sum from 'lodash/sum';
import uniqBy from 'lodash/uniqBy';
import { createSlice } from '@reduxjs/toolkit';
// utils
import axios from '../../utils/axios';
import { GroupState, Group } from '../../@types/group';
// mock
import { _groupList } from '../../_mock/_groups';
//
import { dispatch } from '../store';

// ----------------------------------------------------------------------

const initialState: GroupState = {
  isLoading: false,
  error: null,
  groups: [],
  group: null,
  sortBy: null,
};

const slice = createSlice({
  name: 'group',
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // GET Groups
    getGroupsSuccess(state, action) {
      state.isLoading = false;
      state.groups = action.payload;
    },

    // GET Group
    getGroupSuccess(state, action) {
      state.isLoading = false;
      state.group = action.payload;
    },

    //  SORT Groups
    sortByGroups(state, action) {
      state.sortBy = action.payload;
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const { sortByGroups } = slice.actions;

// ----------------------------------------------------------------------

export function getGroups() {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      // const response: { data: { products: Product[] } } = await axios.get('/api/products');
      dispatch(slice.actions.getGroupsSuccess(_groupList));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function getGroup(name: string) {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      // const response: { data: { product: Group } } = await axios.get('/api/products/product', {
      //   params: { name },
      // });
      dispatch(slice.actions.getGroupSuccess(null));
    } catch (error) {
      console.error(error);
      dispatch(slice.actions.hasError(error));
    }
  };
}
