import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { jobs_hero, nearby_stores } from "../../assets/bannerImages";
import Carousel from "./Carousel";
import theme from "../../lib/styles/Theme";

const Banner = () => {
  const example = [
    {
      title: ["이웃에게 더 가치있게.", <br />, "만원의 행복  🛍️"],
      content: "나에겐 필요하지 않지만 이웃에게는 소중할 수 있어요",
      img: jobs_hero,
    },
    {
      title: ["저렴한 가격으로", <br />, " 부담없이 거래해요 :)"],
      content: "만원 이하의 금액으로 부담을 줄였어요",
      img: nearby_stores,
    },
    {
      title: ["필요한 물건이 있다면", <br />, " 댓글을 남겨보세요 !"],
      content: "댓글을 통해 이웃과 거래할 수 있어요",
      img: nearby_stores,
    },
  ];

  const [currItemIndex, setCurrItemIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrItemIndex((prevIndex) => {
        if (prevIndex >= example.length - 1) {
          return 0;
        } else {
          return prevIndex + 1;
        }
      });
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <BannerBlock>
        <Carousel
          example={example}
          currItemIndex={currItemIndex}
          setCurrItemIndex={setCurrItemIndex}
        />
      </BannerBlock>
    </>
  );
};

export default Banner;

const BannerBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid lightgray;
  background-color: ${(props) => props.theme.lightGrayColor};
  margin-top: 88px;

  .carousel {
    position: relative;
    display: flex;
    overflow: hidden;
    width: 100%;

    .banner-container {
      display: flex;
      transition: transform 0.5s ease-out;
      width: 100%;
      position: relative;
    }
    .icons {
      position: absolute; // 아이콘들을 절대 위치로 배치해 주세요.
      top: 50%;
      transform: translateY(-50%);
      font-size: 1.5rem;
      color: gray;
      cursor: pointer;
      width: auto;

      &.left {
        left: 10%;
      }

      &.right {
        right: 10%;
      }
    }

    .banner-wrapper {
      flex: 0 0 100%;
      align-items: center;
      max-width: 100%;
      height: 300px;
      display: flex;
      justify-content: center;

      .banner-text {
        width: 20%;
        min-width: 240px;
      }

      .banner-img {
        display: flex;
        height: 100%;
        align-items: end;
        max-width: 30%;
        min-width: 400px;
        margin-left: 30px;

        img {
          width: 100%;
          max-height: 200px;
          object-fit: contain;
        }
      }
    }
  }

  .icons {
    width: 100px;
  }

  .title {
    font-size: 2rem;
    font-weight: 800;
    line-height: 2.8rem;
  }

  .content {
    /* width: 100%;
    text-align: start;
    min-height: 200px; */
    margin-top: 14px;

    font-size: 1rem;
    font-weight: 600;
    line-height: 1.8rem;
  }
`;
