import React, { useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import getValidationErros from '../../utils/getValidationErrors';

import Input from '../../components/Input/index';
import Button from '../../components/Button/index';

import dataImg from '../../assets/data.png';
import logoGoogle from '../../assets/logo-google.svg';

import { Container, Content, Left } from './styles';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  // validação usando YUP
  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Digite um e-mail válido!')
          .required('E-mail obrigatório'),
        password: Yup.string().required('Senha obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const errors = getValidationErros(err);

      formRef.current?.setErrors(errors);
    }
  }, []);

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
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Welcome to Invision</h1>
          <label>
            User name or Email
            <Input name="email" />
          </label>
          <label>
            Password
            <Input name="password" type="password" />
          </label>

          <p>Forgot password?</p>
          <Button type="submit">Sign In</Button>
          <p>Or</p>
          <Button className="signWithGoogle" type="submit">
            <img src={logoGoogle} alt="Sign in with Google" />
            <p>Sign in with Google</p>
          </Button>
          <span>
            <p>
              New<strong> Invision?</strong>
              <Link to="/signup"> Create Account</Link>
            </p>
          </span>
        </Form>
      </Content>
    </Container>
  );
};

export default SignIn;
