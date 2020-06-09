import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/logo.svg';
import logoText from './images/logoText.svg';
import * as S from './Nav.styles';

const LogoCombo = () => (
  <S.LogoCombo>
    <Link to="/"><img alt="logo" className="logo" src={logo} /></Link>
    <Link to="/"><img alt="logoText" className="logoText" src={logoText} /></Link>
  </S.LogoCombo>
);

export default LogoCombo;
