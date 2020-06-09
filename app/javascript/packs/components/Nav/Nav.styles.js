import styled, { css } from 'styled-components';
import { borderColor, lightGrey, blue } from '../Global.styles';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  height: 50px;
  background: #191b1c;
  padding: 0 20px;
`;

const DropDown = styled.dl`
  display: flex;
  justify-content: space-between;
  width: -webkit-fill-available;
  max-width: 268px;
  border: 1px solid ${borderColor};
  border-radius: 4px;
  padding: 8px;
  margin-left: 20px;
  max-height:34px;
`;

const LogoCombo = styled.div`
  max-width: 200px;
  height: 100%;
  display: flex;
  align-items: center;
  .logo {
    height: 32px;
  }
  .logoText {
    height: 18px;
    margin-left: 8px;
  }
`;

const Option = styled.dt`
  display: flex;
  width: 100%;
  height: 19px;
  margin-left:12px;
  .icon {
    max-height: 100%;
  }
  .arrow {
    width: 19px;
  margin-left: auto;
  }
  span {
    color: white;
    margin-left: 8px;
  }
`;

const SearchBox = styled.div`
  width: 871px;
  height: 36px;
  position: relative;
  margin: 0 auto;
  img {
    height: 19px;
    position: absolute;
    left: 27px;
    top: 50%;
    transform: translate(0,-50%);
  }
  input {
    border-radius: 4px;
    border: 1px solid ${borderColor};
    width: 100%;
    height: 100%;
    margin-left: 20px;
    padding: 12px 32px;
    background: ${lightGrey};
    color: ${borderColor};
    &:hover{
      border-color: ${blue};
    }
  }
`;

const UserOptions = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-left: 36px;
`;

const IconBox = styled.div`
  ${props => props.left && css`
    border-right: 1px solid ${borderColor};
    padding-right: 8px;
  `}
  img{
    height: 16px;
    margin: 8px;
    padding-left: 8px;
  }
`;

const CoinButton = styled.a`
  display: flex;
  border: 1px solid ${borderColor};
  border-radius: 25px;
  padding: 8px 16px 6px 12px;
  margin-left: 8px;
  cursor: pointer;
  span{
    font-size: 13px;
    color: white;
    padding-left: 5px;
  }
  img{
    height: 16px;
  }
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  width: 215px;
  padding: 4px;
  margin-left: 8px;
  .userData{
    display: flex;
    flex-direction: column;
    font-size: 12px;
    color: white;
    img{
      height: 10px;
    }
    span:last-child{
      margin-top: 4px;
    }
  }
  img{
    height: 24px;
    margin-right: 5px;
    &:first-child{
      background: #3c4042;
      border-radius: 4px;
      border: 1px solid ${borderColor};
    }
  }
  .down{
    margin-left: auto;
  }
`;

const LoginBox = styled.div`
  margin-left: auto;
`;

const Button = styled.a`
  background: ${blue};
  border: 1px solid ${blue};
  padding: 7px 35px;
  margin-right: 12px;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  ${props => props.empty && css`
    background: transparent;
    color: ${blue};
  `}
`;

export {
  Nav, DropDown, Option, LogoCombo, SearchBox, UserOptions, IconBox, CoinButton, UserProfile, Button, LoginBox,
};
