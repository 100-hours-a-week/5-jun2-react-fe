import Header from '../components/Header';
import text from '../constants/text.json';
import globalStyle from '../styles/Global.module.css';
import style from '../styles/pages/UserUpdatePage.module.css';
import ImageInput from '../components/ImageInput';
import TextInput from '../components/TextInput';
import inputInfo from '../constants/inputInfo.json';
import SubmitButton from '../components/SubmitButton';
import basicProfile from '../assets/images/basic-profile.jpg';

const UserUpdatePage = () => {
  return (
    <>
      <Header title={text.MAIN_TITLE} showUserProfile />
      <div className={globalStyle.main}>
        <h1 className={style.subTitle}>{text.UPDATE_USER}</h1>
        <form className={style.updateForm}>
          <div className={style.profileImgBox}>
            <ImageInput
              title={text.PROFILE_IMG}
              imageUrl={basicProfile}
              helperText="* helper text"
            />
            <p className={style.profileChangeBtn}>{text.CHANGE}</p>
          </div>
          <div className={style.emailBox}>
            <label className={style.inputTitle}>{text.EMAIL}</label>
            <p>{'testemail@gmail.com'}</p>
          </div>
          <TextInput
            title={text.NICKNAME}
            inputInfo={inputInfo.NICKNAME_INPUT_INFO}
            helperText="*helper text"
          />
          <div className={style.btnBox}>
            <SubmitButton className={style.updateBtn} text={text.UPDATE} />
            <span className={style.withdrawBtn}>{text.USER_WITHDRAW}</span>
            <button className={style.updateDoneBtn}>{text.UPDATE_DONE}</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UserUpdatePage;
