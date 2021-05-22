import React from 'react';
import { Container, SignUpBox } from './styles';
import KakaoButtonImage from '@assets/kakao_login_medium_wide.png';

const Signup = () => {
  const onClickKakao = () => {
    window.Kakao.Auth.authorize({
      redirectUri: `http://localhost:3050/login/kakao/`,
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
