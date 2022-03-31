import {
  ClientRequest_DELETE,
  ClientRequest_GET,
  ClientRequest_POST,
  ClientRequest_PUT,
  PartnerRequest_GET,
  PartnerRequsetView_GET
} from '@API';
import { RequestInitial, RequsetType } from './State';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { DataInPayload } from '@Utils/DataConvert';
import { RootState } from '@App/store';

export const GET_CLIENT_REQUEST = createAsyncThunk(
  `Request/GET_CLIENT_REQUEST`,
  async (_, { rejectWithValue }) => {
    try {
      const res = await ClientRequest_GET();
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const SET_CLIENT_REQUEST = createAsyncThunk(
  `Request/SET_CLIENT_REQUEST`,
  async (formData: RequsetType['requestForm'], { rejectWithValue, dispatch }) => {
    try {
      await ClientRequest_POST(formData);
      dispatch(GET_CLIENT_REQUEST());
    } catch (error) {
      return rejectWithValue(error.response.data);
    } finally {
    }
  }
);

export const DEL_CLIENT_REQUSET = createAsyncThunk(
  `Reuqest/DEL_CLIENT_REQUSET`,
  async (url: any, { rejectWithValue, dispatch }) => {
    try {
      await ClientRequest_DELETE(url);
      dispatch(GET_CLIENT_REQUEST());
    } catch (error) {
      return rejectWithValue(error);
    } finally {
    }
  }
);

export const EDIT_CLIENT_REQUSET = createAsyncThunk(
  `Reuqest/EDIT_CLIENT_REQUSET`,
  async (url: any, { rejectWithValue, dispatch }) => {
    try {
      await ClientRequest_PUT(url);
      dispatch(GET_CLIENT_REQUEST());
    } catch (error) {
      return rejectWithValue(error);
    } finally {
    }
  }
);

export const GET_PARTNER_REQUEST = createAsyncThunk(
  `Reuqest/GET_PARTNER_REQUEST`,
  async (_, { rejectWithValue }) => {
    try {
      const res = await PartnerRequest_GET();
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const GET_PARTNER_REQUEST_VIEW = createAsyncThunk(
  `Reuqest/GET_PARTNER_REQUEST_VIEW`,
  async (url: any, { rejectWithValue }) => {
    try {
      const res = await PartnerRequsetView_GET(url);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const RequestSlice = createSlice({
  name: 'Request',
  initialState: RequestInitial,
  reducers: {
    /*   ---------       Request ADD  ----------        */

    setKaKaoLocal(state, action) {
      state.requestForm = DataInPayload(action.payload, state.requestForm);
    },

    // 마감일, 예정일 설정

    setDeadLine(state, action) {
      state.requestForm.deadline = action.payload;
    },

    setDueDate(state, action) {
      state.requestForm.dueDate = action.payload;
    },

    // 서비스 선택

    setServiceProperty(state, action) {
      state.other.serviceBol = action.payload;
    },

    deleteService(state, action) {
      state.requestForm.requisitionRequestServiceList =
        state.requestForm.requisitionRequestServiceList.filter(
          (data) => data === { serviceType: action.payload }
        );
    },

    setService(state, action) {
      state.requestForm.requisitionRequestServiceList = [
        ...state.requestForm.requisitionRequestServiceList,
        { serviceType: action.payload }
      ];
    },

    //

    //폼에 데이터 삽입

    setForm(state, action) {
      state.requestForm = action.payload;
    },

    //

    /*   ---------     ----------        */

    setList(state, action) {
      state.list = action.payload;
    },

    setListFilter(state, action) {
      const add = state.list.filter((data) => data.sn === Number(action.payload));
      state.list = add;
    },

    setAllListFilter(state, action) {
      const add = state.allList.filter((data) => data.sn === Number(action.payload));
      state.partnerView = add;
    },

    //

    setRequestList(state, action) {
      state.status = 'LOADING';
      state.view = state.list.filter((data) => String(data.sn) === action.payload);
    },

    setPartnerView(state, action) {
      state.ViewStatus = 'LOADING';
      state.partnerView = state.allList.filter((data) => String(data.sn) === action.payload);
    },

    setViewSuccess(state) {
      state.ViewStatus = 'SUCCESS';
    },

    setSuccess(state) {
      state.status = 'SUCCESS';
    }
  },
  extraReducers: {
    //

    [GET_CLIENT_REQUEST.pending.type]: (state, action) => {
      state.status = 'LOADING';
    },

    [GET_CLIENT_REQUEST.fulfilled.type]: (state, action) => {
      state.status = 'SUCCESS';
      const content = action.payload.requisitionList.content;
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
    },

    [GET_CLIENT_REQUEST.rejected.type]: (state, action) => {
      state.status = 'FAIL';
    },

    //

    [SET_CLIENT_REQUEST.pending.type](state) {
      state.status = 'LOADING';
    },

    [SET_CLIENT_REQUEST.fulfilled.type](state) {
      state.status = 'SUCCESS';
      state.requestForm = RequestInitial.requestForm;
      state.other = RequestInitial.other;
    },

    [SET_CLIENT_REQUEST.rejected.type](state) {
      state.status = 'FAIL';
      state.requestForm = RequestInitial.requestForm;
    },

    //

    //

    [DEL_CLIENT_REQUSET.pending.type](state) {
      state.status = 'LOADING';
    },

    [DEL_CLIENT_REQUSET.fulfilled.type](state) {
      state.status = 'SUCCESS';
    },

    [DEL_CLIENT_REQUSET.rejected.type](state) {
      state.status = 'FAIL';
    },

    //

    [EDIT_CLIENT_REQUSET.pending.type](state) {
      state.status = 'LOADING';
    },

    [EDIT_CLIENT_REQUSET.fulfilled.type](state) {
      state.status = 'SUCCESS';
    },

    [EDIT_CLIENT_REQUSET.rejected.type](state) {
      state.status = 'FAIL';
    },

    //

    [GET_PARTNER_REQUEST.pending.type](state, action) {
      state.status = 'LOADING';
    },

    [GET_PARTNER_REQUEST.fulfilled.type](state, action) {
      const content = action.payload.requisitionList.content;
      console.log(action.payload);
      if (content.length === 0) {
        state.allList = [];
      }
      for (let i = 0; i < content.length; i++) {
        state.allList = content;
      }

      if (state.list.length === 0) {
        state.bolType.isList = false;
      } else {
        state.bolType.isList = true;
      }
      state.status = 'SUCCESS';
    },

    [GET_PARTNER_REQUEST.rejected.type](state) {
      state.status = 'FAIL';
    },

    //

    [GET_PARTNER_REQUEST_VIEW.pending.type](state) {
      state.status = 'LOADING';
    },

    [GET_PARTNER_REQUEST_VIEW.fulfilled.type](state) {
      state.status = 'SUCCESS';
    },

    [GET_PARTNER_REQUEST_VIEW.rejected.type](state) {
      state.status = 'FAIL';
    }

    //
  }
});

export const RequestState = (state: RootState) => state.request;
export const {
  setKaKaoLocal,
  setServiceProperty,
  deleteService,
  setService,
  setForm,
  setDeadLine,
  setList,
  setListFilter,
  setAllListFilter,
  setDueDate,
  setRequestList,
  setSuccess,
  setPartnerView,
  setViewSuccess
} = RequestSlice.actions;
export default RequestSlice.reducer;
