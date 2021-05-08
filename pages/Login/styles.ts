import styled from '@emotion/styled';
import { GlobalStyles } from '@typings/styles.types';

export const Container = styled.div`
  background-color: #e9ecf1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginBox = styled.div`
  background-color: #fff;
  padding: 64px 32px;
`;

export const LoginForm = styled.form`
  > span {
    display: inline-block;
    margin: 3px 0;
    font-size: 5px;
    color: ${(props: any) => props.theme.lightBlackColor};
  }
`;

export const LoginInputWrapper = styled.div`
  > input:focus {
    outline: none;
    border-bottom: 1px;
    border-style: solid;
    border-color: #000;
  }
  > input::placeholder {
    color: #cfcccc;
  }
  > input {
    border: 0;
    border-bottom: 1px;
    border-style: solid;
    border-color: #cfcccc;
    padding: 12px 0;
    font-size: 18px;
  }
`;

export const SubmitInput = styled.input`
  width: 100%;
  border: 0;
  padding: 12px;
  margin: 14px 0;
  background-color: ${(props: any) => props.theme.primaryColor};
  font-size: 14px;
`;
