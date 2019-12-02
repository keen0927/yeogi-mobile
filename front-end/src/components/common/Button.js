import React from 'react';
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  border: 0;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;
  background-color: rgba(0,0,0,0.5);
  transition: background-color 0.4s;
  &:hover {
    background-color: rgba(0,0,0,0.8);
  }
  
  ${props =>
    props.fullWidth && 
    css`
      width: 100%;
    `}
  
  ${props =>
    props.purple && 
    css`
      background-color: mediumpurple;
    `}
`;

const Button = props => <StyledButton {...props} />;

export default Button;
