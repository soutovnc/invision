import React from 'react';
import { Form } from '@unform/web';

import Input from '../../components/Input/index';
import Button from '../../components/Button/index';

import dataImg from '../../assets/data.png';
import logoGoogle from '../../assets/logo-google.svg'

import { Container, Content, Left } from './styles';

const SignIn: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log(data);
  }

  return (
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
        <Form onSubmit={handleSubmit}>
          <h1>Welcome to Invision</h1>
          <Input name="email" placeholder="E-mail" />
          <Input name="password" type="password" placeholder="Senha" />
          <a href="forgot">Forgot password?</a>
          <Button type="submit">Sign In</Button>
          <p>Or</p>
          <Button className="signWithGoogle" type="submit">
            <img src={logoGoogle} alt="Sign in with Google"/>
            <p>Sign in with Google</p>
          </Button>
          <p>New <strong>Invision?</strong> Create Account</p>
        </Form>
      </Content>
    </Container>
  );
};

export default SignIn;
