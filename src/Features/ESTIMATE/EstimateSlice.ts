import {
  EstimateClientView_Get,
  EstimateClient_GET,
  EstimateView_DELETE,
  EstimateView_GET,
  EstimateView_PUT,
  Estimate_GET,
  Estimate_POST
} from '@Features/API';
import { EstimateInitial, EstimateType } from './State';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { RootState } from '@App/store';

export const SET_ESTIMATE = createAsyncThunk(
  `estimate/SET_ESTIMATE`,
  async (form: EstimateType['estimateForm'], { rejectWithValue, dispatch }) => {
    try {
      const res = await Estimate_POST(form);
      dispatch(GET_ESTIMATE());
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const GET_ESTIMATE = createAsyncThunk(
  `estimate/GET_ESTIMATE`,
  async (_, { rejectWithValue }) => {
    try {
      const res = await Estimate_GET();
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const GET_ESTIMATE_VIEW = createAsyncThunk(
  `estimate/GET_ESTIMATE_VIEW`,
  async (url: any, { rejectWithValue }) => {
    try {
      const res = await EstimateView_GET(url);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const DEL_ESTIMATE_VIEW = createAsyncThunk(
  `estimate/DEL_ESTIMATE_VIEW`,
  async (url: any, { rejectWithValue, dispatch }) => {
    try {
      await EstimateView_DELETE(url);
      await dispatch(GET_ESTIMATE());
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const EDIT_ESTIMATE_VIEW = createAsyncThunk(
  `estimate/EDIT_ESTIMATE_VIEW`,
  async (API: { form: EstimateType['estimateForm']; sn: any }, { rejectWithValue }) => {
    try {
      const res = await EstimateView_PUT(API);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//Client

export const GET_ESTIMATE_CLIENT = createAsyncThunk(
  `estimate/GET_ESTIMATE_CLIENT`,
  async (_, { rejectWithValue }) => {
    try {
      const res = await EstimateClient_GET();
      console.log(res.data);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const GET_ESTIMATE_CLIENT_VIEW = createAsyncThunk(
  `estimate/GET_ESTIMATE_CLIENT_VIEW`,
  async (url: any, { rejectWithValue }) => {
    try {
      const res = await EstimateClientView_Get(url);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const EstimateSlice = createSlice({
  name: 'estimate',
  initialState: EstimateInitial,
  reducers: {
    // correct

    setEstimateList(state, action) {
      state.viewStatus = 'LOADING';
      state.view = state.list.filter((data) => String(data.sn) === action.payload);
    },

    setViewSuccess(state) {
      state.viewStatus = 'SUCCESS';
    },

    setSetLoading(state) {
      state.setStatus = 'LOADING';
    },

    setSetSuccess(state) {
      state.setStatus = 'SUCCESS';
    },

    //견적서 작성

    setFromDate(state, action) {
      state.estimateForm.workFromdate = action.payload;
    },
    setToDate(state, action) {
      state.estimateForm.workTodate = action.payload;
    },

    setForm(state, action) {
      state.estimateForm = action.payload;
    },

    //

    // 서비스 선택

    setServiceProperty(state, action) {
      state.other.serviceBol = action.payload;
    },

    deleteService(state, action) {
      state.estimateForm.estimateProvideServiceList =
        state.estimateForm.estimateProvideServiceList.filter(
          (data) => data === { serviceType: action.payload }
        );
    },

    setService(state, action) {
      state.estimateForm.estimateProvideServiceList = [
        ...state.estimateForm.estimateProvideServiceList,
        { serviceType: action.payload }
      ];
    },

    //

    setParamsId(state, action) {
      state.estimateForm.requisitionEntity = { sn: action.payload };
    },

    //

    //CLIENT

    setClientView(state, action) {
      state.ClientView = state.ClientList.filter((data) => String(data.sn) === action.payload);
    },
    setClientViewSuccess(state) {
      state.ClientGETstatus = 'SUCCESS';
    },
    setAllListFilter(state, action) {
      const add = state.list.filter((data) => data.sn === Number(action.payload));
      state.view = add;
    },

    setIsEdit(state) {
      state.bolType.isEdit = !state.bolType.isEdit;
    }
  },
  extraReducers: {
    //

    [SET_ESTIMATE.pending.type](state) {
      state.setStatus = 'LOADING';
    },

    [SET_ESTIMATE.fulfilled.type](state) {
      state.setStatus = 'SUCCESS';
    },

    [SET_ESTIMATE.rejected.type](state) {
      state.setStatus = 'FAIL';
    },

    //

    [GET_ESTIMATE.pending.type](state) {
      state.status = 'LOADING';
    },

    [GET_ESTIMATE.fulfilled.type](state, action) {
      const content = action.payload.estimate.content;
      console.log(action.payload);
      if (content.length === 0) {
        state.list = [];
      }

      for (let i = 0; i < content.length; i++) {
        state.list = content;
      }

      if (state.list.length === 0) {
        state.bolType.isList = false;
      } else {
        state.bolType.isList = true;
      }
      state.status = 'SUCCESS';
    },

    [GET_ESTIMATE.rejected.type](state) {
      state.status = 'FAIL';
    },

    //

    [GET_ESTIMATE_VIEW.pending.type](state) {
      state.status = 'LOADING';
    },

    [GET_ESTIMATE_VIEW.fulfilled.type](state) {
      state.status = 'SUCCESS';
    },

    [GET_ESTIMATE_VIEW.rejected.type](state) {
      state.status = 'FAIL';
    },

    //

    [DEL_ESTIMATE_VIEW.pending.type](state) {
      state.delStatus = 'LOADING';
    },

    [DEL_ESTIMATE_VIEW.fulfilled.type](state) {
      state.delStatus = 'SUCCESS';
    },

    [DEL_ESTIMATE_VIEW.rejected.type](state) {
      state.delStatus = 'FAIL';
    },

    //

    [EDIT_ESTIMATE_VIEW.pending.type](state) {
      state.status = 'LOADING';
    },

    [EDIT_ESTIMATE_VIEW.fulfilled.type](state) {
      state.status = 'SUCCESS';
    },

    [EDIT_ESTIMATE_VIEW.rejected.type](state) {
      state.status = 'FAIL';
    },

    //

    //Client

    [GET_ESTIMATE_CLIENT.pending.type](state) {
      state.status = 'LOADING';
    },

    [GET_ESTIMATE_CLIENT.fulfilled.type](state, action) {
      const content = action.payload.estimateList.content;
      console.log(action.payload);
      if (content.length === 0) {
        state.ClientList = [];
      }

      for (let i = 0; i < content.length; i++) {
        state.ClientList = content;
      }

      if (state.ClientList.length === 0) {
        state.bolType.isClientList = false;
      } else {
        state.bolType.isClientList = true;
      }

      state.status = 'SUCCESS';
    },

    [GET_ESTIMATE_CLIENT.rejected.type](state) {
      state.status = 'FAIL';
    },

    //
    [GET_ESTIMATE_CLIENT_VIEW.pending.type](state) {
      state.ClientGETstatus = 'LOADING';
    },

    [GET_ESTIMATE_CLIENT_VIEW.fulfilled.type](state, action) {
      console.log(action.payload);
      state.ClientView = action.payload.estimate;
      state.ClientGETstatus = 'SUCCESS';
    },

    [GET_ESTIMATE_CLIENT_VIEW.rejected.type](state, action) {
      state.ClientGETstatus = 'FAIL';
      console.log(action.payload);
    }

    //
  }
});

export const EsitmateState = (state: RootState) => state.estimate;
export const {
  setForm,
  setParamsId,
  setEstimateList,
  setViewSuccess,
  setIsEdit,
  setToDate,
  setFromDate,
  setServiceProperty,
  deleteService,
  setService,
  setSetLoading,
  setSetSuccess,
  setClientView,
  setClientViewSuccess
} = EstimateSlice.actions;
export default EstimateSlice.reducer;
