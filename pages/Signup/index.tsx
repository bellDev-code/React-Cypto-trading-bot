import React from 'react';
import { Container, SignUpBox } from './styles';
import KakaoButtonImage from '@assets/kakao_login_medium_wide.png';

const Signup = () => {
  const onClickKakao = () => {
    window.Kakao.Auth.authorize({
      redirectUri: `https://6a0fa8955515.ngrok.io/login/kakao/`,
    });
  };
  return (
    <Container>
      <SignUpBox>
        <img src={KakaoButtonImage} onClick={onClickKakao} />
      </SignUpBox>
    </Container>
  );
};

export default Signup;
