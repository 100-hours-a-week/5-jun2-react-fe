import globalStyle from '../styles/Global.module.css';
import style from '../styles/pages/BoardDetailPage.module.css';
import text from '../constants/text.json';
import Header from '../components/Header';
import basicProfile from '../assets/images/basic-profile.jpg';
import basicContentImg from '../assets/images/youtube.png';
import RoundedButton from '../components/RoundedButton';
import Comment from '../components/Comment';
import useFetch from '../hooks/useFetch';
import { useParams } from 'react-router-dom';

const BoardDetailPage = () => {
  const { id } = useParams();
  const { data: board, loading, error } = useFetch(`http://localhost:8080/api/boards/${id}`);
  console.log(board);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <Header title={text.MAIN_TITLE} showBackButton backUrl={'/boards'} showUserProfile />
      <div className={globalStyle.mainTop}>
        <div className={style.boardLayout}>
          {/** 게시글 정보 영역 */}
          <div className={style.boardInfoWrapper}>
            <h2 className={style.boardTitle}>{board.title}</h2>
            <div className={style.boardInfoBox}>
              <div className={style.boardWriterInfoBox}>
                <div className={style.boardWriter}>
                  <img src={basicProfile} alt="" />
                  <span></span>
                </div>
                <div className={style.createdAt}>
                  <span>{board.createdAt}</span>
                </div>
              </div>
              <div className={style.boardBtns}>
                <button className={style.boardModalBtn}>수정</button>
                <button className={style.boardModalBtn}>삭제</button>
              </div>
            </div>
          </div>
          <hr className={style.line}></hr>

          {/** 컨텐츠 영역 */}
          <div className={style.contentWrapper}>
            <div className={style.contentImgBox}>
              {/** 이후 board.imageUrl 변경해야 함 */}
              {basicContentImg && <img src={basicContentImg} alt="img" />}
            </div>
            <div className={style.contentTextBox}>
              <p>{board.content}</p>
            </div>
            <div className={style.contentInfoBox}>
              <div className={style.contentInfo}>
                <p>{board.viewCount}</p>
                <p>조회수</p>
              </div>
              <div className={style.contentInfo}>
                <p>{board.commentCount}</p>
                <p>댓글수</p>
              </div>
            </div>
          </div>
          <hr className={style.line}></hr>

          {/** 댓글 영역 */}
          <div className={style.commentWriteBox}>
            <textarea placeholder="댓글을 남겨주세요!"></textarea>
            <hr className={style.line}></hr>
            <div className={style.commentBtnBox}>
              <RoundedButton text={text.REGISTER_COMMENT} />
            </div>
          </div>
          <div className={style.commentBox}>
            <Comment />
            <Comment />
            <Comment />
          </div>
        </div>
      </div>
    </>
  );
};

export default BoardDetailPage;
