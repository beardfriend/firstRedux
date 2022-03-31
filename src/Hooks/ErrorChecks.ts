import { useCallback, useState } from 'react';

export const ErrorCheck = () => {
  const [passwordState, setPassword] = useState({ msg: '', bol: false });
  const [emailState, setEmail] = useState({ msg: '', bol: false });
  const [nameState, setName] = useState({ msg: '', bol: false });
  const [repasswordState, setRepasswordState] = useState({ msg: '', bol: false });
  const handleEmailCheck = (email, msg) => {
    if (email.length === 0) {
      return;
    }
    if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      setEmail({ ...emailState, msg: msg, bol: true });
    }
    if (email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      setEmail({ ...emailState, msg: msg, bol: false });
    }
  };

  const handlePasswordCheck = (password, msg) => {
    if (password.length === 0) {
      return;
    }
    if (!password.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/)) {
      setPassword({ ...passwordState, msg: msg, bol: true });
    } else {
      setPassword({ ...passwordState, msg: msg, bol: false });
    }
  };
  const handleRepasswordCheck = (repassword, msg) => {
    if (repassword.length === 0) {
      return;
    }
    if (!repassword.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/)) {
      setRepasswordState({ ...repasswordState, msg: msg, bol: true });
    } else {
      setRepasswordState({ ...repasswordState, msg: msg, bol: false });
    }
  };

  const handleNameCheck = (name, msg) => {
    if (name.length === 0) return;
    if (name.length >= 2) {
      setName({ ...nameState, msg: msg, bol: false });
    } else {
      setName({ ...nameState, msg: msg, bol: true });
    }
  };

  return {
    emailState,
    passwordState,
    nameState,
    repasswordState,
    handleEmailCheck,
    handlePasswordCheck,
    handleNameCheck,
    handleRepasswordCheck
  };
};
