import EstimateReducer from '@Features/ESTIMATE/EstimateSlice';
import MypageReducer from '@Features/MYPAGE/Mypageslice';
import PatnerReducer from '@Features/MYPAGE/Partnerslice';
import RequestReducer from '@Features/REQUEST/RequestSlice';
import SignInReducer from '@Features/USER/SignInSlice';
import SignUpReducer from '@Features/USER/SignUpSlice';
import UserReducer from '@Features/USER/UserSlice';
import { configureStore } from '@reduxjs/toolkit';

// import logger from 'redux-logger';
export const store = configureStore({
  reducer: {
    user: UserReducer,
    signIn: SignInReducer,
    signUp: SignUpReducer,
    mypage: MypageReducer,
    partner: PatnerReducer,
    request: RequestReducer,
    estimate: EstimateReducer
  }
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
