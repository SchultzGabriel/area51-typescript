import React from "react";

interface ButtonProps {
  /**
  * Disabled desabilita o botão (dãã)
  */
  disabled?: boolean,
  /**
   * Adicione o que quiser renderizar no botão
   */
  children: React.ReactNode
}

export default function Button({ disabled, children }: ButtonProps){
    return(
        <button disabled={disabled}>
          {children}
        </button>
    )
}

Button.defaultProps ={
  disabled: true,
}