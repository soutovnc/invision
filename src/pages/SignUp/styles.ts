import styled from 'styled-components';

import dataImg from '../../assets/data.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
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
    margin: 120px 124px 41px 713px;
    font-family: 'Muli', sans-serif;
    font-weight: bold;
    line-height: 48px;
    font-size: 35px;
    color: #000000;
    opacity: 1;

    display: flex;
  }

  form {
    margin: 42px auto;
    text-align: center;
    width: 434px;
    /* flex: 1; */
    /* flex-direction: column; */
    /* align-items: center; */

    h1 {
      margin-bottom: 87px;
      height: 38px;
      font-size: 30px;
      text-align: center;
      font-family: 'Muli', sans-serif;
      color: #707070;
      opacity: 1;
    }

    p {
      margin: 40px;
      font-family: 'Muli', sans-serif;
      font-size: 14px;
      line-height: 18px;
      color: #707070;
    }

    & + p {
      margin-top: 40px;
      font-family: 'Muli', sans-serif;
      font-size: 14px;
      line-height: 20px;
      color: #707070;
    }

    strong {
      font-weight: bold;
    }

    a {
      color: #a9c5ba;
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

export const Left = styled.div`
  flex: 1;
  height: 100vh;
  background-color: #a9c5ba;
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
