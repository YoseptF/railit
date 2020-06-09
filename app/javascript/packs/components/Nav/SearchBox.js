import React from 'react';
import search from './images/search.svg';
import * as S from './Nav.styles';

const SearchBox = () => (
  <S.SearchBox>
    <img src={search} alt="search" />
    <input type="text" placeholder="Search" autoComplete="off" />
  </S.SearchBox>
);

export default SearchBox;
