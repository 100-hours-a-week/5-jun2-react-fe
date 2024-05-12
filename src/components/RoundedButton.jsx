import style from '../styles/components/RoundedButton.module.css';

const RoundedButton = ({ text }) => {
  return <button className={style.roundedButton}>{text}</button>;
};

export default RoundedButton;
