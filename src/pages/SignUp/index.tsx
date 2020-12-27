import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import getValidationErros from '../../utils/getValidationErrors';

import Input from '../../components/Input/index';
import Button from '../../components/Button';

import dataImg from '../../assets/data.png';
import logoGoogle from '../../assets/logo-google.svg';

import { Container, Content, Left } from './styles';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  // validação usando YUP
  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .email('Digite um e-mail válido!')
          .required('E-mail obrigatório'),
        password: Yup.string().min(6, 'No mínimo 6 dígitos'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErros(err);

        formRef.current?.setErrors(errors);
      }
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
        <Form onSubmit={handleSubmit}>
          <h1>Getting Started</h1>
          <Input name="name" placeholder="Full Name" />
          <Input name="user" placeholder="User name or Email" />
          <Input
            name="password"
            type="password"
            placeholder="Create Password"
          />
          <Button type="submit">Sign Up</Button>
          <p>Or</p>
          <Button className="signWithGoogle" type="submit">
            <img src={logoGoogle} alt="Sign in with Google" />
            <p>Sign in with Google</p>
          </Button>
          <p>
            By signing up, you agree to <strong>Invision</strong>
            <br />
            Terms of Conditions and Privacy Policy
          </p>
          <p>
            Already on <strong>Invision?</strong> Log in
          </p>
        </Form>
      </Content>
    </Container>
  );
};

export default SignUp;
