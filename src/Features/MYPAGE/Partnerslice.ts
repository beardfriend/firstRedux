import { DataInPayload, RegionCheck, ServiceCheck } from '@Utils/DataConvert';
import { PartnerInitial, PartnerTypes } from './State';
import { PartnerProfile_GET, PartnerProfile_PUT } from '@Features/API';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { RootState } from '@App/store';

//GET?SET?EDIT?DELETE
export const GET_PARTNER_PROFILE = createAsyncThunk(
  'partner/GET_PARTNER_PROFILE',
  async (_, { rejectWithValue }) => {
    try {
      const res = await PartnerProfile_GET();
      console.log(res.data);

      return res.data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

export const EDIT_PARTNER_PROFILE = createAsyncThunk(
  'partner/EDIT_PARTNER_PROFILE',
  async (formData: PartnerTypes['formData'], { rejectWithValue, dispatch }) => {
    try {
      await PartnerProfile_PUT(formData);
      dispatch(GET_PARTNER_PROFILE());
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

export const PartnerSlice = createSlice({
  name: 'partner',
  initialState: PartnerInitial,
  reducers: {
    setKaKaoLocal: (state, action: PayloadAction<{ [x: string]: string }>) => {
      state.formData.partnerProfileEntity = DataInPayload(
        action.payload,
        state.formData.partnerProfileEntity
      );
    },

    setProfileChange(state, action) {
      state.formData.partnerProfileEntity = action.payload;
      if (state.bolType.isChanged === false) {
        state.bolType.isChanged = true;
      }
    },

    setCurrentData(state) {
      state.formData.partnerProfileEntity = state.partnerProfileEntity;
      state.formData.partnerActivityAreaList = state.partnerActivityAreaList;
      state.other.businessBol = RegionCheck(state.partnerActivityAreaList);
      state.other.serviceBol = ServiceCheck(state.partnerProvideServiceList);
    },

    /* ---- 활동지역 선택 ---  */

    setArea(state, action: PayloadAction<string>) {
      state.formData.partnerActivityAreaList.push({ activeRegion: action.payload });
      if (state.bolType.isChanged === false) {
        state.bolType.isChanged = true;
      }
    },

    deleteArea(state, action: PayloadAction<string>) {
      state.formData.partnerActivityAreaList = state.formData.partnerActivityAreaList.filter(
        (data) => !data.activeRegion.includes(action.payload)
      );
      if (state.bolType.isChanged === false) {
        state.bolType.isChanged = true;
      }
    },

    setAreaProperty(state, action: PayloadAction<{ [property: string]: boolean }>) {
      state.other.businessBol = action.payload;
    },

    /* --- */

    /* ---- 서비스 선택 ---  */

    setService(state, action: PayloadAction<string>) {
      state.formData.partnerProvideServiceList.push({ serviceType: action.payload });
      if (state.bolType.isChanged === false) {
        state.bolType.isChanged = true;
      }
    },

    deleteService(state, action: PayloadAction<string>) {
      state.formData.partnerProvideServiceList = state.formData.partnerProvideServiceList.filter(
        (data) => !data.serviceType.includes(action.payload)
      );
      if (state.bolType.isChanged === false) {
        state.bolType.isChanged = true;
      }
    },

    setServiceProperty: (state, action: PayloadAction<{ [property: string]: boolean }>) => {
      state.other.serviceBol = action.payload;
    }

    /* --- */
  },
  extraReducers: {
    //

    [GET_PARTNER_PROFILE.pending.type](state) {
      state.status = 'LOADING';
    },

    [GET_PARTNER_PROFILE.fulfilled.type](state, action) {
      state.status = 'SUCCESS';
      state.user.email = action.payload.user.email;
      state.user.name = action.payload.user.name;

      const payloadtt = action.payload.partnerProfile.partnerProfileEntity;
      delete payloadtt.userEntity;
      state.partnerProfileEntity = payloadtt;
      console.log(action.payload.partnerProfile.partnerProvideServiceList);
      state.partnerProvideServiceList = action.payload.partnerProfile.partnerProvideServiceList;
      state.partnerActivityAreaList = action.payload.partnerProfile.partnerActivityAreaList;
      state.bolType.isChanged = false;
    },

    [GET_PARTNER_PROFILE.rejected.type](state) {
      state.status = 'FAIL';
    },

    //
    [EDIT_PARTNER_PROFILE.pending.type](state) {
      state.status = 'LOADING';
    },

    [EDIT_PARTNER_PROFILE.fulfilled.type](state) {
      state.status = 'SUCCESS';
    },

    [EDIT_PARTNER_PROFILE.rejected.type](state) {
      state.status = 'FAIL';
    }

    //
  }
});

export const partnerState = (state: RootState) => state.partner;
export const {
  setKaKaoLocal,
  setCurrentData,
  setProfileChange,
  setArea,
  setAreaProperty,
  deleteArea,
  setServiceProperty,
  deleteService,
  setService
} = PartnerSlice.actions;
export default PartnerSlice.reducer;
