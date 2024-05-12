import style from '../styles/components/BoardCard.module.css';
import basicProfile from '../assets/images/basic-profile.jpg';

const BoardCard = (props) => {
  const boardData = props.boardData;

  return (
    <div className={style.boardCardWrapper}>
      <div className={style.titleBox}>
        <h2>{boardData.title}</h2>
      </div>
      <div className={style.boardInfoBox}>
        <div className={style.countBox}>
          <span>좋아요 {boardData.likesCount}</span>
          <span>댓글 {boardData.commentsCount}</span>
          <span>조회수 {boardData.viewsCount}</span>
        </div>
        <div className={style.dateBox}>
          <span>{boardData.createdAt}</span>
        </div>
      </div>
      <hr className={style.line} />
      <div className={style.userInfoBox}>
        <img className={style.userProfileImg} src={basicProfile} alt="basicUrl" />
        <span>{boardData.writerNickname}</span>
      </div>
    </div>
  );
};

export default BoardCard;
