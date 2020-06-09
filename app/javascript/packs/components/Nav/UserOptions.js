import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './Nav.styles';
import {
  all, popular, publicAccess, chat, messages, create, coin, user, down, karma,
} from './images/UserOptions';

function UserOptions() {
  return (
    <S.UserOptions>
      <S.IconBox left>
        <Link to="/"><img src={popular} alt="popular" /></Link>
        <Link to="/"><img src={all} alt="all" /></Link>
        <Link to="/"><img src={publicAccess} alt="publicAccess" /></Link>
      </S.IconBox>
      <S.IconBox>
        <Link to="/"><img src={chat} alt="chat" /></Link>
        <Link to="/"><img src={messages} alt="messages" /></Link>
        <Link to="/"><img src={create} alt="create" /></Link>
      </S.IconBox>
      <S.CoinButton>
        <img src={coin} alt="coin" />
        <span>Get Coins</span>
      </S.CoinButton>
      <S.UserProfile>
        <img src={user} alt="user" />
        <div className="userData">
          <span>Finalcraneo</span>
          <span>
            <img src={karma} alt="karma" />
            {' '}
            99 karma
          </span>
        </div>
        <img src={down} alt="down" className="down" />
      </S.UserProfile>
    </S.UserOptions>
  );
}

export default UserOptions;
