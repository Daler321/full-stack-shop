import React, { FormEvent, ChangeEvent, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { AppDispatch } from '../../store/store';
import {
  selectAuthErrorAndLoading,
  selectTokenAndId,
} from '../../store/authorization/authorization.selector';
import { logInUser } from '../../store/authorization/authorization.thunk';

import FormInput from '../../components/features/form-input/form-input.component';
import CustomButton from '../../components/elements/custom-button/custom-button.component';

import {
  LogInContainer,
  ButtonsContainer,
  LogInPageContainer,
  LogInForm,
} from './log-in-page.styles';

const defaulatFormFields = {
  email: '',
  password: '',
};

const LogInPage = () => {
  const [formFields, setFormFields] = useState(defaulatFormFields);
  const { password, email } = formFields;
  const nav = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const { loading } = useSelector(selectAuthErrorAndLoading);
  const { token } = useSelector(selectTokenAndId);

  useEffect(() => {
    if (token && !loading) nav('/profile');
  }, [token]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(logInUser({ usernameOrEmail: email, password }));
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <LogInPageContainer>
      <LogInContainer>
        <h2>Already have an account?</h2>
        <span>Sign in with your email or user name and password</span>
        <LogInForm onSubmit={handleSubmit}>
          <FormInput
            label='Email or username'
            type='text'
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
          <ButtonsContainer>
            <CustomButton type='submit' isLoading={loading}>
              Log In
            </CustomButton>
          </ButtonsContainer>
        </LogInForm>
        <h2>Do not have an account?</h2>
        <ButtonsContainer>
          <CustomButton onClick={() => nav('/singup')}>Sing Up</CustomButton>
        </ButtonsContainer>
      </LogInContainer>
    </LogInPageContainer>
  );
};

export default LogInPage;
