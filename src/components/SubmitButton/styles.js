import styled from 'styled-components'

export const Button = styled.button`
  background: #2491f6;
  border-radius: 3px;
  border: none;
  color: #fff;
  height: 34px;
  display: block;
  width: 100%;
  text-align: center;
  &[disabled] {
    opacity: .3;
  }
`