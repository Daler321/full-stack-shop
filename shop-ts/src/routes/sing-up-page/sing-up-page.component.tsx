import React, { FormEvent, ChangeEvent, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from '../../store/store';
import { singUpUser } from '../../store/authorization/authorization.thunk';
import {
  selectAuthErrorAndLoading,
  selectTokenAndId,
} from '../../store/authorization/authorization.selector';

import FormInput from '../../components/features/form-input/form-input.component';
import CustomButton from '../../components/elements/custom-button/custom-button.component';

import {
  LogInContainer,
  ButtonsContainer,
  LogInPageContainer,
  LogInForm,
} from '../log-in-page/log-in-page.styles';

const defaulatFormFields = {
  userName: '',
  email: '',
  password: '',
  passwordRepit: '',
};

const SingUpPage = () => {
  const [formFields, setFormFields] = useState(defaulatFormFields);
  const { password, email, userName, passwordRepit } = formFields;
  const { loading } = useSelector(selectAuthErrorAndLoading);
  const { token } = useSelector(selectTokenAndId);
  const dispatch = useDispatch<AppDispatch>();
  const nav = useNavigate();

  useEffect(() => {
    if (token) {
      nav('/profile');
    }
  }, [token]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password !== passwordRepit) return alert('Passwords not matchs');
    const userData = {
      password,
      email,
      username: userName,
    };
    dispatch(singUpUser(userData));
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <LogInPageContainer>
      <LogInContainer>
        <h2>Create an account</h2>
        <span>Please fill the fields</span>
        <LogInForm onSubmit={handleSubmit}>
          <FormInput
            label='User name'
            type='text'
            required
            onChange={handleChange}
            name='userName'
            value={userName}
          />

          <FormInput
            label='Email'
            type='email'
            required
            onChange={handleChange}
            name='email'
            value={email}
          />

          <FormInput
            label='Password'
            type='password'
            required
            onChange={handleChange}
            name='password'
            value={password}
          />

          <FormInput
            label='Confirm your password'
            type='password'
            required
            onChange={handleChange}
            name='passwordRepit'
            value={passwordRepit}
          />
          <ButtonsContainer>
            <CustomButton type='submit' isLoading={loading}>
              Sing Up
            </CustomButton>
          </ButtonsContainer>
        </LogInForm>
        <h2>Do have an account?</h2>
        <ButtonsContainer>
          <CustomButton onClick={() => nav('/login')}>Log in</CustomButton>
        </ButtonsContainer>
      </LogInContainer>
    </LogInPageContainer>
  );
};

export default SingUpPage;
