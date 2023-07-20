import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { logoGray } from "../../assets/logo";
import { FaGithub } from "react-icons/fa";
import theme from "../../lib/styles/Theme";

const Footer = () => {
  return (
    <FooterBlock>
      <div className="text-wrapper">
        <Link to={"/"}>
          <img className="logo-img" alt="footer-logo" src={logoGray} />
        </Link>
        <span>
          <p>
            <strong>Project Period</strong>2023.7.14 ~ 7.19
          </p>
          <p>
            <strong>BE</strong>Spring Boot- data-jpa, thymeleaf, web, tomcat,
            lombok
          </p>
          <p>
            <strong>FE</strong>react-redux, redux-toolkit, react-oauth/google,
            axios, jwt-decode, styled-component, react-tostify, sweetalert2,
            aws-sdk
          </p>
        </span>
      </div>

      <div className="icon-wrapper">
        <Link
          to={"https://github.com/nayoung3669/second-hand-frontend"}
          className="github"
        >
          <FaGithub /> Fe
        </Link>
        <Link to={"https://github.com/NHclub/used-market"} className="github">
          <FaGithub /> Be
        </Link>
      </div>
    </FooterBlock>
  );
};

export default Footer;

const FooterBlock = styled.div`
  margin: 150px auto 0px;
  padding: 40px 30px 30px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  height: 280px;
  background-color: ${theme.darkGrayColor};
  color: ${theme.lightGrayColor};

  .logo-img {
    width: 190px;
    margin-bottom: 10px;
    transform: translateX(-4px);
  }

  .icon-wrapper {
    display: flex;
    align-items: end;
    justify-content: end;
    gap: 20px;

    .github {
      font-size: 1.2rem;
    }
  }

  .text-wrapper {
    display: flex;
    flex-direction: column;
    //align-items: end;
    justify-content: space-between;

    p {
      line-height: 28px;
      font-size: 0.9rem;
      font-weight: 300;

      &:nth-child(1) {
        margin-bottom: 8px;
      }
    }

    strong {
      margin-right: 8px;
    }
  }
`;
