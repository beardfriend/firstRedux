import React, { useEffect } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import EstimateClientList from '@Pages/Estimate/EstimateClientList';
import EstimateClinetView from '@Pages/Estimate/EstimateClientView';
import EstimateList from '@Pages/Estimate/EstimateList';
import EstimateView from '@Pages/Estimate/EstimateView';
import EtsimateAdd from '@Pages/Estimate/EtsimateAdd';
import { GET_USERDATA } from '@Features/USER/UserSlice';
import { Global } from './Global/global';
import Hello from '@Pages/Hello';
import Main from './Pages/_Main';
import Mypage from '@Pages/Mypage';
import Notfound from '@Pages/Notfound';
import PatnerProfile from '@Pages/PartnerProfile';
import ReqeustPartnerView from '@Pages/Request/ReqeustPartnerView';
import RequestAdd from '@Pages/Request/RequestAdd';
import RequestList from '@Pages/Request/List';
import RequestPartnerList from '@Pages/Request/RequestPartnerList';
import RequestRead from '@Pages/Request/RequestRead';
import SelectUser from './Containers/SelectUser';
import SignIn from './Pages/SignIn';
import Signup from './Pages/_Signup';
import Test from '@Pages/Test';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      await dispatch(GET_USERDATA());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [dispatch]);

  return (
    <Router>
      <Global />
      <Switch>
        {/* <PrivateRoute exact path='/' component={Main} /> */}
        <Route exact path='/' component={Main} />
        <Route exact path='/login' component={SignIn} />

        <Route exact path='/signup' component={Signup} />

        <Route exact path='/usertype' component={SelectUser} />

        <Route exact path='/mypage' component={Mypage} />
        <Route exact path='/partnerProfile' component={PatnerProfile} />

        <Route exact path='/hello' component={Hello} />
        <Route exact path='/test' component={Test} />
        <Route exact path='/request/list' component={RequestList} />
        <Route exact path='/request/partner/list' component={RequestPartnerList} />
        <Route path='/request/partner/list/:id' component={ReqeustPartnerView} />
        <Route exact path='/request/add' component={RequestAdd} />
        <Route path='/request/list/:id' component={RequestRead} />

        <Route exact path='/estimate/add' component={EtsimateAdd} />
        <Route exact path='/estimate/list' component={EstimateList} />
        <Route path='/estimate/list/:id' component={EstimateView} />
        <Route exact path='/estimate/client/list' component={EstimateClientList} />
        <Route path='/estimate/client/list/:id' component={EstimateClinetView} />
        <Route path='*' component={Notfound} />
      </Switch>
    </Router>
  );
};

export default App;
