import globalStyle from '../styles/Global.module.css';
import style from '../styles/pages/BoardDetailPage.module.css';
import text from '../constants/text.json';
import Header from '../components/Header';
import basicProfile from '../assets/images/basic-profile.jpg';
import basicContentImg from '../assets/images/youtube.png';
import RoundedButton from '../components/RoundedButton';
import Comment from '../components/Comment';

const BoardDetailPage = () => {
  const dummyText =
    '국회는 의장 1인과 부의장 2인을 선출한다. 형사피고인은 유죄의 판결이 확정될 때까지는 무죄로 추정된다. 국군의 조직과 편성은 법률로 정한다. 제3항의 승인을 얻지 못한 때에는 그 처분 또는 명령은 그때부터 효력을 상실한다. 이 경우 그 명령에 의하여 개정 또는 폐지되었던 법률은 그 명령이 승인을 얻지 못한 때부터 당연히 효력을 회복한다.' +
    '비상계엄하의 군사재판은 군인·군무원의 범죄나 군사에 관한 간첩죄의 경우와 초병·초소·유독음식물공급·포로에 관한 죄중 법률이 정한 경우에 한하여 단심으로 할 수 있다. 다만, 사형을 선고한 경우에는 그러하지 아니하다.' +
    '국방상 또는 국민경제상 긴절한 필요로 인하여 법률이 정하는 경우를 제외하고는, 사영기업을 국유 또는 공유로 이전하거나 그 경영을 통제 또는 관리할 수 없다.' +
    '국회는 국가의 예산안을 심의·확정한다. 공개하지 아니한 회의내용의 공표에 관하여는 법률이 정하는 바에 의한다. 광물 기타 중요한 지하자원·수산자원·수력과 경제상 이용할 수 있는 자연력은 법률이 정하는 바에 의하여 일정한 기간 그 채취·개발 또는 이용을 특허할 수 있다.';

  return (
    <>
      <Header title={text.MAIN_TITLE} showBackButton backUrl={'/boards'} showUserProfile />
      <div className={globalStyle.mainTop}>
        <div className={style.boardLayout}>
          {/** 게시글 정보 영역 */}
          <div className={style.boardInfoWrapper}>
            <h2 className={style.boardTitle}>제목 1</h2>
            <div className={style.boardInfoBox}>
              <div className={style.boardWriterInfoBox}>
                <div className={style.boardWriter}>
                  <img src={basicProfile} alt="" />
                  <span>더미 작성자 1</span>
                </div>
                <div className={style.createdAt}>
                  <span>2024-01-01 00:00:00</span>
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
              <img src={basicContentImg} alt="img" />
            </div>
            <div className={style.contentTextBox}>
              <p>{dummyText}</p>
            </div>
            <div className={style.contentInfoBox}>
              <div className={style.contentInfo}>
                <p>123</p>
                <p>조회수</p>
              </div>
              <div className={style.contentInfo}>
                <p>123</p>
                <p>조회수</p>
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
