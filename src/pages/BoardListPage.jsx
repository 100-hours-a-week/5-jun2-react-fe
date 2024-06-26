import Header from '../components/Header';
import text from '../constants/text.json';
import globalStyle from '../styles/Global.module.css';
import style from '../styles/pages/BoardListPage.module.css';
import RoundedButton from '../components/RoundedButton';
import useFetch from '../hooks/useFetch';
import BoardCard from '../components/BoardCard';

const BoardListPage = () => {
  const {data: board, loading, error }} = useFetch('http://localhost:8080/api/boards');
  const { data: board, loading, error } = useFetch(`http://localhost:8080/api/boards/`);

  return (
    <>
      <Header title={text.MAIN_TITLE} showUserProfile />
      <div className={globalStyle.mainTop}>
        <div className={style.titleBox}>
          <p>안녕하세요,</p>
          <p>
            아무 말 대잔치 <span>게시판</span> 입니다.
          </p>
        </div>
        <div className={style.btnBox}>
          <RoundedButton text={text.BOARD_WRITE}></RoundedButton>
        </div>
        <div className={style.boardCardsWrapper}>
          {boards &&
            boards.map((board) => {
              return <BoardCard boardData={board} key={board.id} />;
            })}
        </div>
      </div>
    </>
  );
};

export default BoardListPage;
