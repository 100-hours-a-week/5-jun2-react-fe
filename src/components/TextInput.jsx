import style from '../styles/components/TextInput.module.css';

const TextInput = ({ title, inputInfo, helperText, readOnly }) => {
  return (
    <div className={style.textInputWrapper}>
      <div className={style.titleBox}>
        <label className={style.inputTitle}>{title}</label>
      </div>
      <div className={style.inputBox}>
        <input
          type={inputInfo['type']}
          name={inputInfo['name']}
          className={inputInfo['className']}
          placeholder={inputInfo['placeHolder']}
          maxLength={25}
          readOnly={readOnly}
        />
      </div>
      <div className={style.helperTextBox}>
        <span className={style.helperText}>{helperText}</span>
      </div>
    </div>
  );
};

export default TextInput;
