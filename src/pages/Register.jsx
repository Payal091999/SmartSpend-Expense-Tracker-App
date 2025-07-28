import AuthForm from "../components/AuthForm";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    // You can connect to API here later
    console.log("Register submitted");
  };

  return <AuthForm isLogin={false} onSubmit={handleRegister} />;
};

export default Register;
