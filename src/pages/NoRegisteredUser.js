import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm/index'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'

const login = 'Inicia sesión con tu cuenta petslovers y descubre el increible mundo de las mascotas'

export const NoRegisteredUser = () => ( 
  <Context.Consumer>
    {
      ({ activateAuth }) => {
        return (
          <>
            <RegisterMutation>
              {
                (register, { data, loading, error }) => {
                  const onSubmit = ({ email, password }) => {
                    const input = { email, password }
                    const variables = { input }
                    register({ variables }).then(activateAuth)
                  }

                  const errorMsg = error && 'Usuario ya existe'

                  return <UserForm disabled={loading} error={errorMsg} title='¿No tienes una cuenta? Registrate' onSubmit={onSubmit} />
                }
              }
            </RegisterMutation>
            <LoginMutation>
              {
                (login, { data, loading, error }) => {
                  const onSubmit = ({ email, password }) => {
                    const input = { email, password }
                    const variables = { input }
                    login({ variables }).then(activateAuth)
                  }

                  const errorMsg = error && 'Usuario o contraseña incorrectos'
                  return <UserForm disabled={loading} error={errorMsg} title={login} onSubmit={onSubmit} />
                }
              }
            </LoginMutation>
          </>
        )
      }
    }
  </Context.Consumer>
)
