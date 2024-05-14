import style from '../styles/components/Comment.module.css';
import basicProfile from '../assets/images/basic-profile.jpg';

const Comment = () => {
  return (
    <div className={style.commentWrapper}>
      <div className={style.commentInfoBox}>
        <div className={style.infoHeader}>
          <div className={style.infoWriter}>
            <img src={basicProfile} alt="" />
            <span>더미 작성자 1</span>
          </div>
          <span className={style.time}>2021-01-01 00:00:000</span>
        </div>
        <div className={style.commentBox}>
          <div className={style.space}></div>
          <span className={style.comment}>예시 댓글 1</span>
        </div>
      </div>
      <div className={style.commentBtns}>
        <button className={style.commentModalBtn}>수정</button>
        <button className={style.commentModalBtn}>삭제</button>
      </div>
    </div>
  );
};

export default Comment;
