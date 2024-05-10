import './TextInput.css';

const TextInput = ({ title, input, helperText }) => {
  return (
    <div className="text-input-wrapper">
      <div className="title-box">
        <label for={input.name} className="input-title">
          {title}
        </label>
      </div>
      <div className="input-box">
        <input
          type={input.type}
          name={input.name}
          className={input.className}
          placeholder={input.placeHolder}
          maxLength={25}
        />
      </div>
      <div className="helper-text-box">
        <span className="helper-text">{helperText}</span>
      </div>
    </div>
  );
};

export default TextInput;
