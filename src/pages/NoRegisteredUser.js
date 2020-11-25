import React, { Fragment, useContext } from 'react'
import { Context } from '../Context'
import { UserForm } from '../components/UserForm/index'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'

export const NoRegisteredUser = () => {
  const { activateAuth } = useContext(Context)

  return ( 
  <Fragment>
      <RegisterMutation>
        {(register, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password };
            const variables = { input };
            register({ variables }).then(({ data }) => {
              const { signup } = data;
              activateAuth(signup);
            });
          };

          const errorMsg = error && 'Usuario ya existe';
          const title = '¿No tienes una cuenta? Registrate'

          return (
            <UserForm
              disabled={loading}
              error={errorMsg}
              title={title}
              onSubmit={onSubmit}
            />
          );
        }}
      </RegisterMutation>
      <LoginMutation>
        {(login, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password };
            const variables = { input };
            login({ variables }).then(({ data }) => {
              const { login } = data;
              activateAuth(login);
            });
          };
          const errorMsg = error && 'Usuario o contraseña incorrectos';
          const title ='Inicia sesión con tu cuenta petslovers y descubre el increible mundo de las mascotas'

          return (
            <UserForm
              disabled={loading}
              error={errorMsg}
              title={title}
              onSubmit={onSubmit}
            />
          )
        }}
      </LoginMutation>
    </Fragment>
  )
}
