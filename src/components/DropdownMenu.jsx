import style from '../styles/components/DropdownMenu.module.css';
import { Link } from 'react-router-dom';

const DropdownMenu = () => {
  return (
    <ul className={style.dropdownWrapper}>
      <li className={style.dropdownBox}>
        <Link to="/users/me">회원정보수정</Link>
      </li>
      <li className={style.dropdownBox}>
        <Link to="/users/password">비밀번호수정</Link>
      </li>
      <li className={`${style.dropdownBox} ${style.logoutBtn}`}>로그아웃</li>
    </ul>
  );
};

export default DropdownMenu;
