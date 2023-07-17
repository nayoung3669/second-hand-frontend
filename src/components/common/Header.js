import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderBlock>
      <h3>
        <Link to={"/mainpage"}>로고</Link>
      </h3>
      <div>
        <span>
          <Link to={"/login"}>로그인</Link>
        </span>
        <span>
          <Link to={"/register"}>회원가입</Link>
        </span>
        <span>
          <Link to={"/mypage"}> (마이페이지)</Link>
        </span>
      </div>
    </HeaderBlock>
  );
};

export default Header;

const HeaderBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px;

  span:first-child {
    padding-right: 14px;
  }
`;
