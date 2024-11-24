import React, { Fragment } from 'react';
import { useState } from "react";

import ButtonGroup from '@atlaskit/button/button-group';
import LoadingButton from '@atlaskit/button/loading-button';
import Button from '@atlaskit/button/new';
import { Checkbox } from '@atlaskit/checkbox';
import TextField from '@atlaskit/textfield';
import './styles.css';

import Form, {
  CheckboxField,
  ErrorMessage,
  Field,
  FormFooter,
  FormHeader,
  FormSection,
  HelperMessage,
  RequiredAsterisk,
  ValidMessage,
} from '@atlaskit/form';

interface Idata {
  username: string;
  password: string;
}
const FormLogin= () => {
  
  const [users, setUsers] = useState({message:''});  

  const onSendClick = (data:Idata) => {
        fetch("/login", {
            method: "POST",
            body: JSON.stringify({ data }),
        })
    .then((res) => res.json())
            .then((data) => {

                setUsers(data);
            });
    };
  
  return(
  <div className="card">
    <Form<{ username: string; password: string; remember: boolean }>
			onSubmit={(data) => {
				console.log('form data', data);
				return new Promise((resolve) => setTimeout(resolve, 2000)).then(() =>
					data.username === 'error' ? { username: 'IN_USE' } : undefined,
				);
			}}
		>
      {({ formProps, submitting }) => (
        <form {...formProps}>
          <FormHeader title="Авторизация">
            <p aria-hidden="true">
            Обязательные поля отмечены звездочкой <RequiredAsterisk />
            </p>
          </FormHeader>
          <FormSection>
            <Field
              aria-required={true}
              name="username"
              label="Логин"
              isRequired
            >
              {({ fieldProps, error }) => (
                <Fragment>
                  <TextField autoComplete="off" {...fieldProps} placeholder='Введите логин' />
                  {!error && (
                    <HelperMessage>
                      Вы можете использовать буквы цифры и точки
                    </HelperMessage>
                  )}
                  {error && (
                    <ErrorMessage>
                      Это имя пользователя уже используется, попробуйте другое
                    </ErrorMessage>
                  )}
                </Fragment>
              )}
            </Field>
            <Field
              aria-required={true}
              name="password"
              label="Пароль"
              defaultValue=""
              isRequired
              validate={(value) =>
                value && value.length < 8 ? 'TOO_SHORT' : undefined
              }
            >
              {({ fieldProps, error, valid, meta }) => {
                return (
                  <Fragment>
                    <TextField type="password" {...fieldProps} placeholder='Введите пароль'/>
                    {error && !valid && (
                      <HelperMessage>
                        Используйте 8 или более символов, состоящих из букв, цифр и символов
                      </HelperMessage>
                    )}
                    {error && (
                      <ErrorMessage>
                        Пароль должен содержать более 8 символов
                      </ErrorMessage>
                    )}
                    {valid && meta.dirty ? (
                      <ValidMessage>Отличный пароль!</ValidMessage>
                    ) : null}
                  </Fragment>
                );
                
              }}
            </Field>
            <CheckboxField name="remember" defaultIsChecked>
							{({ fieldProps }) => (
								<Checkbox {...fieldProps} label="Всегда запомнить меня на этом устройстве" />
							)}
						</CheckboxField>
          </FormSection>
          <FormFooter>
            <ButtonGroup label="Form submit options">
              <LoadingButton
                type="submit"
                appearance="primary"
                isLoading={submitting}
              >
                Войти
              </LoadingButton>
            </ButtonGroup>
          </FormFooter>
        </form>
      )}
    </Form>
  </div>
)};
export default FormLogin;