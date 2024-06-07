import globalStyle from '../styles/Global.module.css';
import style from '../styles/pages/SignupPage.module.css';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import text from '../constants/text.json';
import inputInfo from '../constants/inputInfo.json';
import ImageInput from '../components/ImageInput';
import TextInput from '../components/TextInput';
import SubmitButton from '../components/SubmitButton';
import { useState } from 'react';
import useValid from '../hooks/useValid';

const SignupPage = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    passwordCheck: '',
    nickname: '',
  });
  const { validText, isValid } = useValid(form);
  console.log(validText);

  return (
    <>
      <Header title={text.MAIN_TITLE} showBackButton backUrl={'/login'} showUserProfile />
      <div className={globalStyle.main}>
        <h1 className={style.subTitle}>{text.SIGNUP}</h1>
        <form className={style.signupForm}>
          <ImageInput title={text.PROFILE_IMG} crossLine helperText="* helper text" />
          <TextInput
            title={`${text.EMAIL} *`}
            inputInfo={inputInfo.EMAIL_INPUT_INFO}
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            valid={!isValid.isEmail}
            helperText={validText}
          />
          <TextInput
            title={`${text.PASSWORD} *`}
            inputInfo={inputInfo.PASSWORD_INPUT_INFO}
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            valid={!isValid.isPassword}
            helperText={validText}
          />
          <TextInput
            title={`${text.PASSWORD_CHECK} *`}
            inputInfo={inputInfo.PASSWORD_CHECK_INPUT_INFO}
            value={form.passwordCheck}
            onChange={(e) => setForm({ ...form, passwordCheck: e.target.value })}
            valid={!isValid.isPasswordCheck}
            helperText={validText}
          />
          <TextInput
            title={`${text.NICKNAME} *`}
            inputInfo={inputInfo.NICKNAME_INPUT_INFO}
            value={form.nickname}
            onChange={(e) => setForm({ ...form, nickname: e.target.value })}
            valid={!isValid.isNickname}
            helperText={validText}
          />
          <SubmitButton text={text.SIGNUP}></SubmitButton>
        </form>
        <Link className={globalStyle.textLink} to="/login">
          로그인하러 가기
        </Link>
      </div>
    </>
  );
};

export default SignupPage;
