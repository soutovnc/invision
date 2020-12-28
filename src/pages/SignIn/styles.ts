import styled from 'styled-components';

import { shade } from 'polished';
import dataImg from '../../assets/data.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Left = styled.div`
  flex: 1;
  background: #a9c5ba;
  background-size: cover;

  img {
    display: flex;
    margin: 112px 127px;
    background: url(${dataImg}) no-repeat center;
  }

  h1 {
    height: 38px;
    margin-top: 30px;
    margin-bottom: 20px;
    text-align: center;
    color: #ffffff;
    font-family: 'Muli', sans-serif;
    line-height: 30px;
    opacity: 1;
  }

  p {
    width: 553px;
    height: 60px;
    text-align: center;
    color: #ffffff;
    margin-top: 20px;
    margin-left: 202px;
    font-family: 'Muli', sans-serif;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  place-content: center;

  width: 100%;
  max-width: 960px;
  background-color: #ffffff;

  header h1 {
    margin: 120px 124px 73px 713px;
    font-family: 'Muli', sans-serif;
    font-weight: bold;
    line-height: 48px;
    font-size: 35px;
    color: #000000;
    opacity: 1;

    display: flex;
  }

  form {
    margin: 0 auto;
    text-align: center;
    width: 434px;

    h1 {
      margin-bottom: 87px;
      height: 38px;
      font-size: 30px;
      text-align: center;
      font-family: 'Muli', sans-serif;
      color: #707070;
      opacity: 1;
    }

    /* esqueci minha senha */
    a {
      color: #707070;
      display: block;
      margin-top: 18px;
      margin-left: 318px;
      text-decoration: none;
      transition: color 0.2s;
      font-family: 'Muli', sans-serif;
      font-size: 14px;
      line-height: 18px;

      &:hover {
        color: ${shade(0.2, '#707070')};
      }
    }

    p {
      font-family: 'Muli', sans-serif;
      font-size: 14px;
      line-height: 18px;
      margin: 40px;
      color: #707070;
    }

    & + p {
      margin-top: 40px;
      color: #707070;
      font-family: 'Muli', sans-serif;
      font-size: 14px;
      line-height: 20px;
    }

    strong {
      font-weight: bold;
    }

    .signWithGoogle {
      height: 45px;
      width: 263px;
      margin: 40px auto;

      display: flex;

      background-color: #ffffff;
      color: #000000;
      box-shadow: 0px 3px 6px #00000029;
      border-radius: 100px;

      img {
        margin: 8px 20px;
      }

      p {
        line-height: 22px;
        width: 153px;

        margin: 12px auto;

        text-align: left;
        font-size: 18px;
        font-family: 'Lato', sans-serif;

        color: #000000;
      }
    }
  }

  form label {
    display: block;
    margin: 21px 0 4px;
    font-family: 'Muli', sans-serif;
    font-size: 18px;
    color: #707070;
    text-align: left;
  }
`;
