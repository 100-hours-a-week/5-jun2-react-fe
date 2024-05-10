import style from '../styles/components/SubmitButton.module.css';

const SubmitButton = ({ text }) => {
  return <button className={style.submitBtn}>{text}</button>;
};

export default SubmitButton;
