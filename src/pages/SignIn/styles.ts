import styled from 'styled-components';

import { shade } from 'polished';

import data2x from '../../assets/data2x.png';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: stretch;
  background-color: #a9c5ba;
`;

export const Left = styled.div`
  flex: 1;
  margin: 112px 127px 30px;
  width: 960px;
  height: 555px;

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
    line-height: 25px;
    text-align: center;
    color: #ffffff;
    margin: 20px;
    font-family: 'Muli', sans-serif;
    opacity: 1;
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
    margin: 73px 0 143px;
    text-align: center;

    h1 {
      margin-bottom: 87px;
      height: 38px;
      font-size: 30px;
      text-align: left;
      font-family: 'Muli', sans-serif;
      color: #707070;
      opacity: 1;
    }

    /* esqueci minha senha */
    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    color: #ff9000;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
  }
`;
