import style from '../styles/TextInput.module.css';

const TextInput = ({ title, inputInfo, helperText }) => {
  return (
    <div className={style.textInputWrapper}>
      <div className={style.titleBox}>
        <label for={inputInfo.name} className={style.inputTitle}>
          {title}
        </label>
      </div>
      <div className={style.inputBox}>
        <input
          type={inputInfo.type}
          name={inputInfo.name}
          className={inputInfo.className}
          placeholder={inputInfo.placeHolder}
          maxLength={25}
        />
      </div>
      <div className={style.helperTextBox}>
        <span className={style.helperText}>{helperText}</span>
      </div>
    </div>
  );
};

export default TextInput;
