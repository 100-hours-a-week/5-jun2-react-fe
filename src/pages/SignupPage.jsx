import Header from '../components/Header/Header';
import constants from '../constants/constants.json';

const SignupPage = () => {
  return (
    <>
      <Header title={constants.title} showBackButton backUrl={'/login'} showUserProfile />
      <h1>Signup Page</h1>
    </>
  );
};

export default SignupPage;
