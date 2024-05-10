import './Header.css';
import { Link } from 'react-router-dom';
import basicProfile from '../../assets/images/basic-profile.jpg';

const Header = ({ title, showBackButton, showUserProfile, backUrl }) => {
  return (
    <div className="header-layout">
      <div className="header-wrapper">
        <div className="back-btn-box">
          {showBackButton && (
            <Link className="back-btn" to={backUrl}>
              {'<'}
            </Link>
          )}
        </div>
        <div className="main-title-box">
          <h1>{title}</h1>
        </div>
        <div className="profile-img-box">
          {showUserProfile && <img className="profile-img" src={basicProfile} alt="userProfile" />}
        </div>
      </div>
    </div>
  );
};

export default Header;
