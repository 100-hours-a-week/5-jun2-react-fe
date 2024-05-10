import { Link } from 'react-router-dom';
import globalStyle from '../styles/Global.module.css';
import style from '../styles/pages/LoginPage.module.css';
import constants from '../constants/constants.json';
import Header from '../components/Header';
import TextInput from '../components/TextInput';
import SubmitButton from '../components/SubmitButton';

const LoginPage = () => {
  const title = constants['title'];
  const emailInputInfo = constants['emailInputInfo'];
  const passwordInputInfo = constants['passwordInputInfo'];

  return (
    <>
      <Header title={title} />
      <div className={globalStyle.main}>
        <h1 className={style.subTitle}>로그인</h1>
        <form className={style.loginForm}>
          <TextInput title="이메일 *" inputInfo={emailInputInfo} />
          <TextInput title="비밀번호 *" inputInfo={passwordInputInfo} helperText="*helper text" />
          <SubmitButton text="로그인"></SubmitButton>
        </form>
        <Link className={globalStyle.textLink} to="/signup">
          회원가입
        </Link>
      </div>
    </>
  );
};

export default LoginPage;
