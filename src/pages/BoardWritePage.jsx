import globalStyle from '../styles/Global.module.css';
import style from '../styles/pages/BoardWritePage.module.css';
import text from '../constants/text.json';
import Header from '../components/Header';
import SubmitButton from '../components/SubmitButton';

const BoardWritePage = () => {
  return (
    <>
      <Header title={text.MAIN_TITLE} showBackButton showUserProfile />
      <div className={globalStyle.mainTop}>
        <h2 className={style.subTitle}>게시글 작성</h2>
        <form className={style.boardWriteForm}>
          <div className={style.titleBox}>
            <label>{text.TITLE} *</label>
            <hr className={style.line}></hr>
            <input
              name={'title'}
              type={'text'}
              className={style.boardTitle}
              placeholder="제목을 입력해주세요. (최대 26글자)"
              maxLength={26}
            />
            <hr className={style.line}></hr>
          </div>
          <div className={style.contentBox}>
            <label>{text.CONTENT} *</label>
            <hr className={style.line}></hr>
            <textarea
              name="content"
              cols={30}
              rows={10}
              placeholder="내용을 입력해주세요."
            ></textarea>
            <span className={style.helperText}>* helper text</span>
          </div>
          <div className={style.imgBox}>
            <label>{text.IMAGE}</label>
            <div className={style.imgInputBox}>
              <label className={style.imgInputBtn} for="imgInput">
                파일 선택
              </label>
              <input
                id="imgInput"
                type="file"
                accept="image/jpeg,.txt"
                style={{ display: 'none' }}
              />
              <span className={style.fileText}>파일을 선택해주세요.</span>
            </div>
          </div>
          <SubmitButton text={text.DONE} />
        </form>
      </div>
    </>
  );
};

export default BoardWritePage;
