import globalStyle from '../styles/Global.module.css';
import style from '../styles/pages/PasswordUpdatePage.module.css';
import text from '../constants/text.json';
import inputInfo from '../constants/inputInfo.json';
import Header from '../components/Header';
import TextInput from '../components/TextInput';
import SubmitButton from '../components/SubmitButton';

const PasswordUpdatePage = () => {
  return (
    <>
      <Header title={text.MAIN_TITLE} showBackButton showUserProfile />
      <div className={globalStyle.main}>
        <h2 className={style.subTitle}>{text.PASSWORD_UPDATE}</h2>
        <form className={style.passwordUpdateForm}>
          <TextInput
            title={text.PASSWORD}
            inputInfo={inputInfo.PASSWORD_INPUT_INFO}
            helperText={'* helper text'}
          />
          <TextInput
            title={text.PASSWORD_CHECK}
            inputInfo={inputInfo.PASSWORD_CHECK_INPUT_INFO}
            helperText={'* helper text'}
          />
          <SubmitButton text={text.UPDATE} />
        </form>
      </div>
    </>
  );
};

export default PasswordUpdatePage;
