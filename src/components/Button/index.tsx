import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

// prestar atenção se o return não irá
// causar problemas, se causar, revisar o código

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <Container name="container" type="button" {...rest}>
      {children}
    </Container>
  );
};

export default Button;
