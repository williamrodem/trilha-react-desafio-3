import React from 'react'

import { ButtonContainer } from './styles';

const ButtonRegister = ({title,variant = "primary", onClick}) => {
  return (
    <ButtonContainer variant={variant} onClick={onClick}>{title}</ButtonContainer>
  )
}

export { ButtonRegister }
