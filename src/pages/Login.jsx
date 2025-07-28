import AuthForm from "../components/AuthForm";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    // You can connect to API here later
    console.log("Login submitted");
  };

  return <AuthForm isLogin={true} onSubmit={handleLogin} />;
};

export default Login;
