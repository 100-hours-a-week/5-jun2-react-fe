import globalStyle from '../styles/Global.module.css';
import style from '../styles/SignupPage.module.css';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import constants from '../constants/constants.json';
import ImageInput from '../components/ImageInput';
import TextInput from '../components/TextInput';
import SubmitButton from '../components/SubmitButton';

const SignupPage = () => {
  const emailInputInfo = constants['emailInputInfo'];
  const passwordInputInfo = constants['passwordInputInfo'];
  const passwordCheckInputInfo = constants['passwordCheckInputInfo'];
  const nickNameInputInfo = constants['nickNameCheckInputInfo'];

  return (
    <>
      <Header title={constants.title} showBackButton backUrl={'/login'} showUserProfile />
      <div className={globalStyle.main}>
        <h1 className={style.subTitle}>회원가입</h1>
        <form className={style.signupForm}>
          <ImageInput title="프로필 사진" helperText="* helper text" />
          <TextInput title="이메일 *" inputInfo={emailInputInfo} helperText="*helper text" />
          <TextInput title="비밀번호 *" inputInfo={passwordInputInfo} helperText="*helper text" />
          <TextInput
            title="비밀번호 확인*"
            inputInfo={passwordCheckInputInfo}
            helperText="*helper text"
          />
          <TextInput title="닉네임 *" inputInfo={nickNameInputInfo} helperText="*helper text" />
          <SubmitButton text="회원가입"></SubmitButton>
        </form>
        <Link className={style.textLink} to="/login">
          로그인하러 가기
        </Link>
      </div>
    </>
  );
};

export default SignupPage;
