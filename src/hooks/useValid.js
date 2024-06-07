import { useEffect, useState } from 'react';
import helperMessage from '../constants/helperText.json';

const useValid = (value) => {
  const EMAIL_REGEX = /^[A-Za-z_\.\-]+@[A-Za-z\-]+\.[A-za-z\-]+/;
  const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,20}/;
  const NICKNAME_REGEX = /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,10}$/;

  const [helperText, setHelperText] = useState('');
  const [isValid, setIsValid] = useState({
    isEmail: false,
    isPassword: false,
    isPasswordCheck: false,
    isNickname: false,
  });

  // TO-BE 이메일 중복 검사 로직 필요
  // 이메일 유효성 검사
  useEffect(
    function validateEmail() {
      const email = value.email;
      if (email === '' || email === null || email === undefined) {
        setHelperText(`* ${helperMessage.REQEUST_EMAIL_INPUT}`);
        setIsValid({ ...isValid, isEmail: false });
      } else if (!EMAIL_REGEX.test(email)) {
        setHelperText(`* ${helperMessage.INVALID_EMAIL_FORM}`);
        setIsValid({ ...isValid, isEmail: false });
      } else {
        setHelperText('');
        setIsValid({ ...isValid, isEmail: true });
      }
    },
    [value.email],
  );

  // 비밀번호 유효성 검사
  useEffect(
    function validatePassword() {
      const password = value.password;
      const passwordCheck = value.passwordCheck;

      if (password === '' || password === null || password === undefined) {
        setHelperText(`* ${helperMessage.REQUEST_PASSWORD_INPUT}`);
        setIsValid({ ...isValid, isPassword: false });
      } else if (!PASSWORD_REGEX.test(password)) {
        setHelperText(`* ${helperMessage.INVALID_PASSWORD_FORM}`);
        setIsValid({ ...isValid, isPassword: false });
      } else if (password !== '' && password != passwordCheck) {
        setHelperText(`* ${helperMessage.NOT_SAME_PASSWORD_CHECK}`);
        setIsValid({ ...isValid, isPassword: false });
      } else {
        setHelperText('');
        setIsValid({ ...isValid, ispassword: true });
      }
    },
    [value.password],
  );

  // 비밀번호 확인 유효성 검사
  useEffect(
    function validatePasswordCheck() {
      const password = value.password;
      const passwordCheck = value.passwordCheck;

      if (passwordCheck === '' || passwordCheck === null || passwordCheck === undefined) {
        setHelperText(`* ${helperMessage.REQUEST_PASSWORD_INPUT_MORE}`);
        setIsValid({ ...isValid, isPasswordCheck: false });
      } else if (passwordCheck !== '' && passwordCheck !== password) {
        setHelperText(`* ${helperMessage.NOT_SAME_PASSWORD}`);
        setIsValid({ ...isValid, isPasswordCheck: false });
      } else {
        setHelperText('');
        setIsValid({ ...isValid, isPasswordCheck: true });
      }
    },
    [value.passwordCheck],
  );

  // TO-BE 닉네임 중복 검사 로직 필요
  // 닉네임 유효성 검사
  useEffect(
    function validateNickname() {
      const nickname = value.nickname;

      if (nickname === '' || nickname === null || nickname === undefined) {
        setHelperText(`* ${helperMessage.REQUEST_NICKNAME_INPUT}`);
        setIsValid({ ...isValid, isNickname: false });
      } else if (!NICKNAME_REGEX.test(nickname)) {
        setHelperText(`* ${helperMessage.CONTAIN_NICKNAME_SPACE}`);
        setIsValid({ ...isValid, isNickname: false });
      } else {
        setHelperText('');
        setIsValid({ ...isValid, isNickname: true });
      }
    },
    [value.nickname],
  );

  console.log(isValid);
  return { helperText, isValid };
};

export default useValid;
