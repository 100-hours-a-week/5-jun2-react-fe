import style from '../styles/components/BoardCard.module.css';

const BoardCard = (props) => {
  const boardData = props.boardData;

  return (
    <div className={style.boardCardWrapper}>
      <div className={style.titleBox}>{boardData.title}</div>
      <div className={style.infoBox}>
        <div className="countsBox">
          <span>좋아요 {boardData.likesCount}</span>
          <span>댓글 {boardData.commentsCount}</span>
          <span>조회수 {boardData.viewsCount}</span>
        </div>
        <div className={style.dateBox}>
          <span>{boardData.createdAt}</span>
        </div>
      </div>
      <div className={style.userInfoBox}>
        <img src={boardData.writerProfileUrl} alt="basicUrl" />
        <span>{boardData.writerNickname}</span>
      </div>
    </div>
  );
};

export default BoardCard;
