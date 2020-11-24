import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm/index'
import { RegisterMutation } from '../container/RegisterMutation'

const login = 'Inicia sesión con tu cuenta petslovers y descubre el increible mundo de las mascotas'

export const NoRegisteredUser = () => ( 
  <Context.Consumer>
    {
      ({ activateAuth }) => {
        return (
          <>
            <RegisterMutation>
              {
                (register) => {
                  const onSubmit = ({ email, password }) => {
                    const input = { email, password }
                    const variables = { input }
                    register({ variables }).then(activateAuth)
                  }
                  return <UserForm title='¿No tienes una cuenta? Registrate' onSubmit={onSubmit} />
                }
              }
            </RegisterMutation>
            <UserForm title={login} onSubmit={activateAuth} />
          </>
        )
      }
    }
  </Context.Consumer>
)
