import style from '../styles/TextInput.module.css';

const TextInput = ({ title, input, helperText }) => {
  return (
    <div className={style.textInputWrapper}>
      <div className={style.titleBox}>
        <label for={input.name} className={style.inputTitle}>
          {title}
        </label>
      </div>
      <div className={style.inputBox}>
        <input
          type={input.type}
          name={input.name}
          className={input.className}
          placeholder={input.placeHolder}
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
