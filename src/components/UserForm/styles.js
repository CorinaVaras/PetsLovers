import styled from 'styled-components'

export const Form = styled.form`
  padding: 16px 0;
  margin-left: 10px;
  margin-right: 10px;
`
export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 100%;
`
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

export const Title = styled.h2`
  padding: 10px;
  font-size: 16px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`

export const Error = styled.span`
  color: red;
  margin-top: 5px;
`
