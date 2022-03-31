export interface UserType {
  roleStatus: 'LOADING' | 'SUCCESS' | 'FAIL' | null;
  userStatus: 'LOADING' | 'SUCCESS' | 'FAIL' | null;

  role: {
    createdDate: string | null;
    role: string | null;
  };

  user: {
    email: string | null;
    name: string | null;
    oauthId: string | null;
    phoneNum: string | null;
    picture: string | null;
    sn: number | null;
  };
}

export const UserInitial: UserType = {
  roleStatus: null,
  userStatus: null,

  role: {
    createdDate: null,
    role: null
  },

  user: {
    email: null,
    name: null,
    oauthId: null,
    phoneNum: null,
    picture: null,
    sn: null
  }
};

export interface SignInType {
  status: 'LOADING' | 'SUCCESS' | 'FAIL' | null;

  isIDsave: boolean;

  postData: {
    email: string;
    password: string;
  };

  ErrorMessage: {
    password: string;
  };
}

const saveId = localStorage.getItem('idchecked');

export const SignInInitial: SignInType = {
  isIDsave: true,
  status: null,
  postData: {
    email: saveId ? saveId : '',
    password: ''
  },
  ErrorMessage: {
    password: ''
  }
};

interface SignUpType {
  status: 'LOADING' | 'SUCCESS' | 'FAIL' | null;

  signUpPost: {
    email: string;
    name: string;
    password: string;
    repassword?: string;
  };
}

export const SignUpInitial: SignUpType = {
  status: null,

  signUpPost: {
    email: '',
    name: '',
    password: '',
    repassword: ''
  }
};
