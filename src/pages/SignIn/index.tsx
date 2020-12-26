import React from 'react';

import Input from '../../components/Input/index';
import Button from '../../components/Button/index';

import dataImg from '../../assets/data.png';

import { Container, Content, Left } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Left>
      <img src={dataImg} alt="Background" />
      <h1>Marcenas mattis egestas</h1>
      <p>
        Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse
        porta.
      </p>
    </Left>
    <Content>
      <header>
        <h1>Invision</h1>
      </header>
      <form>
        <h1>Welcome to Invision</h1>
        <Input name="email" placeholder="E-mail" />
        <Input name="password" type="password" placeholder="Senha" />
        <Button type="submit">Entrar</Button>
        <a href="forgot">Esqueci minha senha</a>
      </form>
    </Content>
  </Container>
);

export default SignIn;
