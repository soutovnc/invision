import styled from 'styled-components';

import { shade } from 'polished';

// import data from '../../assets/data.png';

export const Container = styled.div`
  height: 100vh;
  /* max-width: 1920px; */
  display: flex;
  align-items: stretch;
  background-color: #a9c5ba;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  place-content: center;

  width: 100%;
  max-width: 960px;

  background-color: #ffffff;

  span {
    flex: 1;
    display: flex;
    margin: 120px 120px 47px;
    width: 123px;
    height: 48px;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
  }

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
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
    color: #f4ede8;
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

export const Left = styled.div`
  flex: 1;
  margin: 112px 127px;
  /* left: 127px; */
  width: 960px;
  height: 555px;

  h1 {
    height: 38px;
    margin-top: 30px;
    margin-bottom: 20px;
    text-align: center;
    color: #ffffff;
    font-family: 'Muli', sans-serif;
  }

  p {
    width: 553px;
    height: 60px;
    text-align: center;
    color: #ffffff;
    margin-top: 20px;
    font-family: 'Muli', sans-serif;
  }
`;
