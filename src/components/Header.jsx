import style from '../styles/components/Header.module.css';
import { Link } from 'react-router-dom';
import basicProfile from '../assets/images/basic-profile.jpg';
import DropdownMenu from './DropdownMenu';
import useDropdown from '../hooks/useDropdown';

const Header = ({ title, showBackButton, showUserProfile, backUrl }) => {
  const { isOpen, dropdownRef, toggleDropdown } = useDropdown();

  const handleDropdown = () => {
    toggleDropdown();
  };

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
        <li className={style.profileImgBox}>
          {showUserProfile && (
            <img
              className={style.profileImg}
              ref={dropdownRef}
              onClick={handleDropdown}
              src={basicProfile}
              alt="userProfile"
            />
          )}
          {isOpen && <DropdownMenu />}
        </li>
      </div>
    </div>
  );
};

export default Header;
