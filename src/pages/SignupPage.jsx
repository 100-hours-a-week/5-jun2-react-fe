import globalStyle from '../styles/Global.module.css';
import style from '../styles/SignupPage.module.css';
import Header from '../components/Header';
import constants from '../constants/constants.json';
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
      </div>
    </>
  );
};

export default SignupPage;
