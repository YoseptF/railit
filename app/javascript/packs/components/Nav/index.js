import React from 'react';
import PropTypes from 'prop-types';
import SubsMenu from './SubsMenu';
import UserOptions from './UserOptions';
import LoginBox from './LoginBox';
import * as S from './Nav.styles';
import LogoCombo from './LogoCombo';
import SearchBox from './SearchBox';


function Nav({ isLoggedIn }) {
  return (
    <S.Nav>
      <LogoCombo />
      {isLoggedIn && <SubsMenu />}
      <SearchBox />
      {isLoggedIn ? <UserOptions /> : <LoginBox />}
    </S.Nav>
  );
}

Nav.defaultProps = {
  isLoggedIn: false,
};

Nav.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default Nav;
