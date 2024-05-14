import style from '../styles/components/ImageInput.module.css';
import { useRef, useState } from 'react';

const ImageInput = ({ title, imageUrl, helperText }) => {
  const [profileImg, setProfileImg] = useState([]);
  const [crossLine, setCrossLine] = useState(true);
  const inputRef = useRef(null);

  const onClickHandler = () => {
    console.log(inputRef.current);
    inputRef.current.click();
  };

  const uploadProfileHandler = (e) => {
    const selectFile = e.target.files[0];
    if (selectFile) {
      setProfileImg(selectFile);
      setCrossLine(false);
    } else {
      setProfileImg(imageUrl);
      setCrossLine(true);
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setProfileImg(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <div className={style.imageInputWrapper}>
      <div className={style.textBox}>
        <label className={style.inputTitle}>{title}</label>
        <p className={style.helperText}>{helperText}</p>
      </div>
      <div>
        <input
          type="file"
          accept="image/*"
          onChange={uploadProfileHandler}
          className={style.imageInput}
          ref={inputRef}
        ></input>
        <div onClick={onClickHandler} className={style.circleBox}>
          {crossLine && <div className={style.crossLine}></div>}
          <img className={style.profileImg} src={profileImg ? profileImg : imageUrl}></img>
        </div>
      </div>
    </div>
  );
};

export default ImageInput;
