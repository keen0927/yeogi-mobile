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

const Footer = styled.div`
  margin-top: 10px;
  font-size: 12px;
  color: rgba(0,0,0,0.4);
  text-align:center;  
`

const textMap = {
  login: '로그인',
  register: '회원가입'
};

const AuthForm = ({ type }) => {

  const text = textMap[type];

  return (
    <AuthFormBlock>
      <h3>{text}</h3>
      <form>
        <StyledInput
          autoComplite="username"
          name="username"
          placeholder="아이디 "
        />
        <StyledInput
          autoComplite="new-password"
          name="password"
          placeholder="비밀번호"
          type="password"
        />
        { type === 'register' && (
          <StyledInput
            autoComplite="new-password"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            type="password"
          />
        )}
        <ButtonWidthMarginTop fullWidth purple>
          {text}
        </ButtonWidthMarginTop>
      </form>
      <Footer>
        {type === "login" ?
          (<Link to="/register">회원가입</Link>)
          :
          (<Link to="/login">로그인</Link>)
        }
      </Footer>

    </AuthFormBlock>
  );
};

export default AuthForm;
