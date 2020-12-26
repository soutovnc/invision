import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input: React.FC<InputProps> = (...rest) => (
  <Container>
    <input {...rest} type="text" />
  </Container>
);

export default Input;
