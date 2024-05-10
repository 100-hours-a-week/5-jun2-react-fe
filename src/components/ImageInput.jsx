import style from '../styles/ImageInput.module.css';

const ImageInput = ({ title, helperText }) => {
  return (
    <div className={style.imageInputWrapper}>
      <div className={style.textBox}>
        <label className={style.inputTitle}>{title}</label>
        <p className={style.helperText}>{helperText}</p>
      </div>
      <div>
        <input type="file" accept="image/*" multiple className={style.imageInput}></input>
        <div className={style.circleBox}>
          <div className={style.crossLine}></div>
          <img className={style.profileImg} alt={'hi'}></img>
        </div>
      </div>
    </div>
  );
};

export default ImageInput;
