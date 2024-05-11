import { Link } from 'react-router-dom';
import globalStyle from '../styles/Global.module.css';
import style from '../styles/pages/LoginPage.module.css';
import text from '../constants/text.json';
import inputInfo from '../constants/inputInfo.json';
import Header from '../components/Header';
import TextInput from '../components/TextInput';
import SubmitButton from '../components/SubmitButton';

const LoginPage = () => {
  return (
    <>
      <Header title={text.MAIN_TITLE} />
      <div className={globalStyle.main}>
        <h1 className={style.subTitle}>{text.LOGIN}</h1>
        <form className={style.loginForm}>
          <TextInput title={`${text.EMAIL} *`} inputInfo={inputInfo.EMAIL_INPUT_INFO} />
          <TextInput
            title={`${text.PASSWORD} *`}
            inputInfo={inputInfo.PASSWORD_INPUT_INFO}
            helperText="*helper text"
          />
          <SubmitButton text={text.LOGIN}></SubmitButton>
        </form>
        <Link className={globalStyle.textLink} to="/signup">
          {text.SIGNUP}
        </Link>
      </div>
    </>
  );
};

export default LoginPage;
