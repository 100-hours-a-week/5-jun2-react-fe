import style from '../styles/LoginPage.module.css';
import Header from '../components/Header';
import constants from '../constants/constants.json';
import TextInput from '../components/TextInput';

const LoginPage = () => {
  const emailInputInfo = constants['emailInfo'];
  const passwordInputInfo = constants['passwordInfo'];

  return (
    <>
      <Header title={constants.title} />
      <div className={style.main}>
        <h1>로그인</h1>
        <form className={style.loginForm}>
          <TextInput title="이메일 *" input={emailInputInfo} />
          <TextInput title="비밀번호 *" input={passwordInputInfo} helperText=" *helper text" />
        </form>
      </div>
    </>
  );
};

export default LoginPage;
