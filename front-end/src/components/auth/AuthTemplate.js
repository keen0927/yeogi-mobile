import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

const AuthTemplateBlock = styled.div`
  border: 1px solid rgba(0,0,0,0.15);
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  
  .logo-area {
    padding-bottom: 20px;
    font-size: 20px;
    font-weight:bold;
  }
`;

const AuthTemplate = ({children}) => {
  return(
    <AuthTemplateBlock>
      <div className="logo-area">
        <Link to="/">REACTERS</Link>
      </div>
      {children}
    </AuthTemplateBlock>
  );
};

export default AuthTemplate;
