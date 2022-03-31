import { MyPage_GET, MyPage_POST } from '@Features/API';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { MapageInitial } from './State';
import { RootState } from '@App/store';

export const GET_MYPAGEDATA = createAsyncThunk(
  `Mypage/GET_MYPAGEDATA`,
  async (_, { rejectWithValue }) => {
    try {
      const res = await MyPage_GET();

      return res.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const SET_MYPAGE = createAsyncThunk(
  `Mypage/SET_MYPAGE`,
  async (data: { email: string; phoneNum: string }, { rejectWithValue, dispatch }) => {
    try {
      const res = await MyPage_POST(data);
      dispatch(GET_MYPAGEDATA());
      return res.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const MypageSlice = createSlice({
  name: 'Mypage',
  initialState: MapageInitial,
  reducers: {
    setFormData(state, action: PayloadAction<string>) {
      state.formData.name = action.payload;
    },
    setCurrentData(state) {
      state.formData.name = state.name;
    }
  },
  extraReducers: {
    //

    [GET_MYPAGEDATA.pending.type](state) {
      state.status = 'LOADING';
    },

    [GET_MYPAGEDATA.fulfilled.type](state, action) {
      state.status = 'SUCCESS';
      const { email, name } = action.payload.user;
      state.email = email;
      state.name = name;
    },

    [GET_MYPAGEDATA.rejected.type](state) {
      state.status = 'FAIL';
    },

    //

    [SET_MYPAGE.pending.type](state) {
      state.status = 'LOADING';
    },

    [SET_MYPAGE.fulfilled.type](state) {
      state.status = 'SUCCESS';
    },

    [SET_MYPAGE.rejected.type](state) {
      state.status = 'FAIL';
    }

    //
  }
});

export const mypageState = (state: RootState) => state.mypage;
export const { setFormData, setCurrentData } = MypageSlice.actions;
export default MypageSlice.reducer;
