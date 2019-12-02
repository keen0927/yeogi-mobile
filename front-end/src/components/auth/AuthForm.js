import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../common/Button";

const AuthFormBlock = styled.div``;

const StyledInput = styled.input`
  font-size: 12px;
  border: 0;
  border-bottom: 1px solid rgba(0,0,0,0.15);
  padding-bottom: 0.5rem;
  width: 100%;
  & + & {
    margin-top: 1rem;
  }
`;

const ButtonWidthMarginTop = styled(Button)`
  margin-top: 20px;
`;

const AuthForm = () => {
  return (
    <AuthFormBlock>
      <h3>로그인</h3>
      <form>
        <StyledInput autoComplite="username" name="username" placeholder="아이디 "/>
        <StyledInput autoComplite="new-password" name="password" placeholder="비밀번호" type="password"/>
        <ButtonWidthMarginTop fullWidth purple>로그인</ButtonWidthMarginTop>
      </form>
      <Link to="/register">회원가입</Link>
    </AuthFormBlock>
  );
};

export default AuthForm;
