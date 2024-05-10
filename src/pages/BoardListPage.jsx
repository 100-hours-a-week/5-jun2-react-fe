import Header from '../components/Header/Header';
import constants from '../constants/constants.json';

const BoardListPage = () => {
  return (
    <>
      <Header title={constants.title} showUserProfile />
      <h1>BoardList Page</h1>
    </>
  );
};

export default BoardListPage;
