import React from 'react';
import { useSelector } from 'react-redux';
import alien from './images/alien.svg';
import arrow from './images/down.svg';
import * as S from './Nav.styles';
import { selectSub } from '../../functions/currentSlice';

const Option = () => {
  const currentSub = useSelector(selectSub);

  return (
    <S.Option>
      <img className="icon" alt="icon" src={alien} />
      {' '}
      <span>{currentSub.name}</span>
      <img alt="down" className="arrow" src={arrow} />
    </S.Option>
  );
};

export default Option;
