import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RoleClient_PUT, RolePartner_PUT, UserData_GET } from '@API';
import { UserInitial, UserType } from './State';

import { ObjectOnlyStateItem } from '@Utils/DataConvert';
import type { RootState } from '@App/store';

export const GET_USERDATA = createAsyncThunk(
  `User/GET_USERDATA`,

  async (_, { rejectWithValue }) => {
    try {
      const res = await UserData_GET();
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const SET_ROLE_CLIENT = createAsyncThunk(
  `User/SET_ROLE_CLIENT`,

  async (email: UserType['user']['email'], { rejectWithValue, dispatch }) => {
    try {
      await RoleClient_PUT(email);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
    dispatch(GET_USERDATA());
  }
);

export const SET_ROLE_PARTNER = createAsyncThunk(
  `User/SET_ROLE_PARTNER`,

  async (email: UserType['user']['email'], { rejectWithValue, dispatch }) => {
    try {
      await RolePartner_PUT(email);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
    dispatch(GET_USERDATA());
  }
);

export const UserSlice = createSlice({
  name: 'user',
  initialState: UserInitial,
  reducers: {},
  extraReducers: {
    //

    [GET_USERDATA.pending.type](state) {
      state.userStatus = 'LOADING';
    },

    [GET_USERDATA.fulfilled.type](state, action) {
      state.userStatus = 'SUCCESS';
      const { user, role } = action.payload;

      state.user = ObjectOnlyStateItem(user, state.user);
      state.role = ObjectOnlyStateItem(role, state.role);
    },

    [GET_USERDATA.rejected.type](state) {
      state.userStatus = 'FAIL';
    },

    //

    [SET_ROLE_CLIENT.pending.type](state) {
      state.roleStatus = 'LOADING';
    },

    [SET_ROLE_CLIENT.fulfilled.type](state) {
      state.roleStatus = 'SUCCESS';
    },

    [SET_ROLE_CLIENT.rejected.type](state) {
      state.roleStatus = 'FAIL';
    },

    //

    [SET_ROLE_PARTNER.pending.type](state) {
      state.roleStatus = 'LOADING';
    },

    [SET_ROLE_PARTNER.fulfilled.type](state) {
      state.roleStatus = 'SUCCESS';
    },

    [SET_ROLE_PARTNER.rejected.type](state) {
      state.roleStatus = 'FAIL';
    }

    //
  }
});

export const UserState = (state: RootState) => state.user;

export const {} = UserSlice.actions;
export default UserSlice.reducer;
