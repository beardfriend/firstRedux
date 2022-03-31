import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8084',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  },
  withCredentials: true
});

// const APIJSON = axios.create({
//   baseURL: 'http://localhost:8084',
//   headers: {
//     'Access-Control-Allow-Origin': '*',
//     'Content-Type': 'application/json'
//   }
// });

/**************************  USER   **********************/

//GET UserData
export const UserData_GET = () => API.get('/api/user');

//SET ROLE
export const RolePartner_PUT = (email) => API.put('/api/role-partner', email);
export const RoleClient_PUT = (email) => API.put('/api/role-client', email);

//SIGNIN, SIGNUP, SIGNOUT
export const SignIn_POST = (formData) => API.post('/api/login', formData);
export const SignUP_POST = (formDataName) => API.post('/api/signup/user', formDataName);
export const LogOut_POST = () => API.post('/api/logout');

/* **************************************************************** */

/* *************************   MYPAGE   ********************** */

//Profile
export const MyPage_GET = () => API.get('/api/mypage');
export const MyPage_POST = (formData) => API.put('/api/mypage', formData);

//partner profile
export const PartnerProfile_GET = () => API.get('/api/partner/profile');
export const PartnerProfile_PUT = (formData) => API.put('/api/partner/profile', formData);

/* ****************************************************************** */
// 요청서

export const ClientRequest_GET = () => API.get('/api/client/requisition/list');
export const ClientRequest_POST = (formData) => API.post('/api/client/requisition', formData);
export const ClientRequest_DELETE = (sr) => API.delete(`/api/client/requisition/${sr}`);
export const ClientRequest_PUT = (sr) => API.put(`/api/client/requisition/${sr}`);
//파트너 요청서

export const PartnerRequest_GET = () => API.get('/api/partner/requisition/list');
export const PartnerRequsetView_GET = (sr) => API.get(`/api/partner/requisition/${sr}`);

// 파트너 견적서

export const Estimate_POST = (formData) => API.post('/api/partner/estimate', formData);
export const Estimate_GET = () => API.get('/api/partner/estimate/list');
export const EstimateView_GET = (sn) => API.get(`/api/client/estimate/list/${sn}`);
export const EstimateView_DELETE = (sn) => API.delete(`/api/partner/estimate/${sn}`);
export const EstimateView_PUT = ({ form, sn }) => API.put(`/api/partner/estimate/${sn}`);

//클라이언트 견적서

export const EstimateClient_GET = () => API.get('/api/client/estimate/list');
export const EstimateClientView_Get = (sn) => API.get(`/api/client/estimate/${sn}`);
