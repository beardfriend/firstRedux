import { LoginBox } from '@Containers/Signin';
import { MainLayout } from '@Components/Layout';
import React from 'react';

const SignIn = () => {
  return (
    <>
      <MainLayout middle='middle' login>
        <LoginBox />
      </MainLayout>
    </>
  );
};

export default SignIn;
