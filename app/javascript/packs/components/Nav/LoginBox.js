import React from 'react';
import * as S from './Nav.styles';

function LoginBox() {
  return (
    <S.LoginBox>
      <S.Button>Log In</S.Button>
      <S.Button empty>Sign Up</S.Button>
    </S.LoginBox>
  );
}

export default LoginBox;
