import styled from 'styled-components'

import { Props } from '.'

export const Titulo = styled.h2<Props>`
  font-family: Gloock, serif;
  font-size: 48px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`
export const TituloMaior = styled.h3<Props>`
  font-weight: bold;
  margin-bottom: 16px;
`
