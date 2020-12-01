import React, { ButtonHTMLAttributes } from 'react';

// style
import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => {
  return (
    <Container {...rest}>{loading ? 'Carregando...' : children}</Container>
  );
};

export default Button;
