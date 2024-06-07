import style from '../styles/components/TextInput.module.css';

const TextInput = (props) => {
  const inputInfo = props.inputInfo;
  const helperText = props.helperText;

  return (
    <div className={style.textInputWrapper}>
      <div className={style.titleBox}>
        <label className={style.inputTitle}>{props.title}</label>
      </div>
      <div className={style.inputBox}>
        <input
          type={inputInfo.type}
          name={inputInfo.name}
          placeholder={inputInfo.placeHolder}
          maxLength={25}
          readOnly={props.readOnly}
          onChange={props.onChange}
        />
      </div>
      <div className={style.helperTextBox}>
        <span className={style.helperText}>{helperText}</span>
      </div>
    </div>
  );
};

export default TextInput;
