import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import logo from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logo} alt="" />
      <form action="">
        <h1>Faça seu logon</h1>

        <input placeholder="E-mail" />
        <input placeholder="Senha" type="password" />
        <button type="submit">Entrar</button>
        <a href="forgot">Esqueci minha senha</a>
      </form>
      <a href="">
        <FiLogIn />
        Criar conta
      </a>
    </Content>
    <Background />
  </Container>
);

export default SignIn;
