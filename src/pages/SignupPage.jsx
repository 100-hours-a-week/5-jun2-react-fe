import globalStyle from '../styles/Global.module.css';
import style from '../styles/pages/SignupPage.module.css';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import text from '../constants/text.json';
import inputInfo from '../constants/inputInfo.json';
import ImageInput from '../components/ImageInput';
import TextInput from '../components/TextInput';
import SubmitButton from '../components/SubmitButton';

const SignupPage = () => {
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
            helperText="*helper text"
          />
          <TextInput
            title={`${text.PASSWORD} *`}
            inputInfo={inputInfo.PASSWORD_INPUT_INFO}
            helperText="*helper text"
          />
          <TextInput
            title={`${text.PASSWORD_CHECK} *`}
            inputInfo={inputInfo.PASSWORD_CHECK_INPUT_INFO}
            helperText="*helper text"
          />
          <TextInput
            title={`${text.NICKNAME} *`}
            inputInfo={inputInfo.NICKNAME_INPUT_INFO}
            helperText="*helper text"
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
