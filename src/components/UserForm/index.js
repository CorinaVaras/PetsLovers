import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Title, Error } from './styles'
import { SubmitButton } from '../SubmitButton'

export const UserForm = ({ onSubmit, title, error, disabled }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }

  return (
    <>
      <Title>{title}</Title>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Input disabled={disabled} placeholder='Email' {...email} />
        <Input disabled={disabled} placeholder='Password' type='password' {...password} />
        <SubmitButton disabled={disabled}>Envíar</SubmitButton>
        {error && <Error>{error}</Error>}
      </Form>
    </>
  )
}
