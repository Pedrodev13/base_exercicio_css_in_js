import styled from 'styled-components'

export const FormularioVagas = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: #f9f5e7;
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;

  input {
    padding: 0 16px;
    outline-color: #a7727d;
  }
`
export const Botao = styled.button`
  background-color: #a7727d;
  border: 1px solid #a7727d;
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: var(--cor-secundaria);
  margin-left: 8px;
  cursor: pointer;
`