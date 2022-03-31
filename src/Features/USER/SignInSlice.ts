import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { GET_USERDATA } from '@Features/USER/UserSlice';
import type { RootState } from '@App/store';
import { SignInInitial } from './State';
import { SignInType } from './State';
import { SignIn_POST } from '@API';

export const SET_SIGNIN = createAsyncThunk(
  `signIn/SET_SIGNIN`,
  async (formData: SignInType['postData'], { rejectWithValue, dispatch }) => {
    const forms = new FormData();

    forms.append('email', formData.email);
    forms.append('password', formData.password);

    try {
      const res = await SignIn_POST(forms);
      dispatch(GET_USERDATA());
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const SignInSlice = createSlice({
  name: 'signIn',
  initialState: SignInInitial,
  reducers: {
    //

    setForm(state, action: PayloadAction<{ email: string; password: string }>) {
      state.postData.email = action.payload.email;
      state.postData.password = action.payload.password;
    },

    //

    setIsChecked(state, action: PayloadAction<boolean>) {
      state.isIDsave = action.payload;
      if (state.isIDsave === false) {
        localStorage.removeItem('idchecked');
      }
    },

    //

    setStatusNull(state) {
      state.status = null;
    }
  },
  extraReducers: {
    //

    [SET_SIGNIN.pending.type](state) {
      state.status = 'LOADING';
    },

    [SET_SIGNIN.fulfilled.type](state) {
      state.status = 'SUCCESS';

      sessionStorage.setItem('email', state.postData.email);

      if (state.isIDsave) {
        state.postData.password = '';
        localStorage.setItem('idchecked', state.postData.email);
      } else {
        state.postData = { email: '', password: '' };
      }
    },

    [SET_SIGNIN.rejected.type](state, action) {
      state.status = 'FAIL';
      console.log(action.payload);
      state.ErrorMessage.password = action.payload.msg;
    }

    //
  }
});

export const signInState = (state: RootState) => state.signIn;
export const postData = (state: RootState) => state.signIn.postData;

export const { setForm, setIsChecked, setStatusNull } = SignInSlice.actions;

export default SignInSlice.reducer;
