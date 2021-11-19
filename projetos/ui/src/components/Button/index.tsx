import React from "react";
import styled from 'styled-components';
import get from 'lodash/get';

const ButtonWrapper = styled.button`
    border: 0;
    cursor: pointer;
    padding: 12px 26px;
    font-weight: bold;
    opacity: 1;
    border-radius: 8px;
    color: ${({ theme, color }) => get(theme, `colors.${color}.contrastText`)};
    background: ${({ theme, color }) => get(theme, `colors.${color}.color`)};
    &:disabled {
      cursor: not-allowed;
      opacity: 0.2;
    }
`;

interface ButtonProps {
  /**
  * Disabled desabilita o botão (dãã)
  */
  disabled?: boolean,
  /**
   * Adicione o que quiser renderizar no botão
   */
  children: React.ReactNode,
  /**
   * Define a cor do botão
   */
  color: string,
}

export default function Button({ disabled, children, color }: ButtonProps){
    return(
        <ButtonWrapper disabled={disabled} color={color}>
          {children}
        </ButtonWrapper>
    )
}

Button.defaultProps ={
  disabled: false,
  color: 'primary.main'
}