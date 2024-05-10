import style from '../styles/SubmitButton.module.css';

const SubmitButton = ({ text }) => {
  return <button className={style.submitBtn}>{text}</button>;
};

export default SubmitButton;
