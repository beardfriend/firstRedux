import { LogOut_POST, SignUP_POST } from '@API';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { GET_USERDATA } from '@Features/USER/UserSlice';
import { RootState } from '@App/store';
import { SignUpInitial } from './State';

interface datatype {
  email: string;
  password: string;
  name: string;
}

export const SET_SIGNUP = createAsyncThunk(
  `signUp/SET_SIGNUP`,
  async (data: datatype, { rejectWithValue, dispatch }) => {
    try {
      const res = await SignUP_POST(data);
      dispatch(GET_USERDATA());
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.error);
    }
  }
);

export const SET_LOGOUT = createAsyncThunk(`signUp/SET_LOGOUT`, async (_, { rejectWithValue }) => {
  try {
    await LogOut_POST();
    await sessionStorage.removeItem('email');
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const signUpSlice = createSlice({
  name: 'signUp',
  initialState: SignUpInitial,
  reducers: {
    setFormData: (state, action) => {
      state.signUpPost = action.payload;
    }
  },
  extraReducers: {
    //

    [SET_SIGNUP.pending.type](state) {
      state.status = 'LOADING';
    },

    [SET_SIGNUP.fulfilled.type](state) {
      state.status = 'SUCCESS';
      sessionStorage.setItem('email', state.signUpPost.email);
    },

    [SET_SIGNUP.rejected.type](state) {
      state.status = 'FAIL';
      sessionStorage.setItem('email', state.signUpPost.email);
    },

    //

    [SET_LOGOUT.pending.type]: (state) => {
      state.status = 'LOADING';
    },

    [SET_LOGOUT.fulfilled.type]: (state) => {
      state.status = 'SUCCESS';
    },
    [SET_LOGOUT.rejected.type]: (state) => {
      state.status = 'FAIL';
    }

    //
  }
});
export const SignUpState = (state: RootState) => state.signUp;
export const { setFormData } = signUpSlice.actions;
export default signUpSlice.reducer;
