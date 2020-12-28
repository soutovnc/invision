import styled, { css } from 'styled-components';

interface ContainerProps {
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #ffffff;
  width: 100%;
  border-bottom: 1px solid #707070;
  /* padding: 42px; */

  height: 42px;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 43px;
  }

  ${props =>
    props.isErrored &&
    css`
      border: 1px solid;
      border-radius: 4px 4px 0 0;
      border-color: #c53030;
    `}

  input {
    background: transparent;
    flex: 1;
    margin-left: 20px;
    border: 0;
    color: #000000;
    font-size: 20px;
  }
`;
