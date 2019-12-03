import React from 'react';
import AuthTemplate from "../components/auth/AuthTemplate";
// import AuthForm from "../components/auth/AuthForm";
import LoginForm from "../container/auth/LoginForm";

const LoginPage = () => {
  return (
    <AuthTemplate>
      <LoginForm type="login" />
    </AuthTemplate>
  )
};

export default LoginPage;
