import Header from '../../components/Header/Header';

const SignupPage = () => {
  return (
    <>
      <Header title="아무 말 대잔치" showBackButton backUrl={'/login'} showUserProfile />
      <h1>Signup Page</h1>
    </>
  );
};

export default SignupPage;
