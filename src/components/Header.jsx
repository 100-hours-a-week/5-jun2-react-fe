import style from '../styles/Header.module.css';
import { Link } from 'react-router-dom';
import basicProfile from '../assets/images/basic-profile.jpg';

const Header = ({ title, showBackButton, showUserProfile, backUrl }) => {
  return (
    <div className={style.headerLayout}>
      <div className={style.headerWrapper}>
        <div className={style.backBtnBox}>
          {showBackButton && (
            <Link className={style.backBtn} to={backUrl}>
              {'<'}
            </Link>
          )}
        </div>
        <div className={style.mainTitleBox}>
          <h1>{title}</h1>
        </div>
        <div className={style.profileImgBox}>
          {showUserProfile && (
            <img className={style.profileImg} src={basicProfile} alt="userProfile" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
