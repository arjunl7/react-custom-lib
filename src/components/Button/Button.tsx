import React from "react";
import * as S from "./Button.styled"

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {

  return <S.Button>{props.label}</S.Button>;
};

export default Button;