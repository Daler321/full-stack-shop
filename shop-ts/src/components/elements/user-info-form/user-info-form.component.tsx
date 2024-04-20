import React, { useState, ChangeEvent, useEffect, FormEvent } from 'react';
import { useSelector } from 'react-redux';

import { IUserInfo } from '../../../types/user.interface';
import { selectUserInfo } from '../../../store/user/user.selectsor';

import FormInput from '../../features/form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {
  UserInfoConstainer,
  UserInfoFormElement,
  ButtonsContainer,
} from './user-info-form.styles';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../store/store';
import { selectTokenAndId } from '../../../store/authorization/authorization.selector';
import { setUserInfo, updateUserInfo } from '../../../store/user/user.thunk';

const defaultUserInfo: IUserInfo = {
  id: '',
  firstname: '',
  lastname: '',
  phonenumber: '',
  address: {
    county: '',
    city: '',
    street: '',
    building: '',
    fulladdress: '',
    postalcode: '',
  },
};

const UserInfoForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [isRedact, setIsRedact] = useState(false);
  const [formFields, setFormFields] = useState(defaultUserInfo);
  const [addressFields, setAddressFields] = useState(defaultUserInfo.address);
  const { firstname, lastname, phonenumber } = formFields;
  const { county, city, street, building, fulladdress, postalcode } =
    addressFields;

  const userInfo = useSelector(selectUserInfo);
  const { token, id } = useSelector(selectTokenAndId);

  useEffect(() => {
    if (!userInfo) return;
    setFormFields(userInfo);
    setAddressFields(userInfo.address);
  }, [userInfo]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!token || !id) return;

    if (userInfo && userInfo.id) {
      dispatch(
        updateUserInfo({
          token,
          userInfo: {
            id: id.toString(),
            firstname,
            lastname,
            phonenumber,
            address: addressFields,
          },
        })
      );
    } else {
      dispatch(
        setUserInfo({
          token,
          userInfo: {
            id: id.toString(),
            firstname,
            lastname,
            phonenumber,
            address: addressFields,
          },
        })
      );
    }

    setIsRedact(false);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleChangeAddress = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setAddressFields({ ...addressFields, [name]: value });
  };

  return (
    <UserInfoConstainer>
      <UserInfoFormElement onSubmit={handleSubmit}>
        <h2>Contact Information:</h2>

        <FormInput
          label='First Name'
          type='text'
          required
          onChange={handleChange}
          name='firstname'
          value={firstname}
          disabled={!isRedact}
        />
        <FormInput
          label='Last Name'
          type='text'
          required
          onChange={handleChange}
          name='lastname'
          value={lastname}
          disabled={!isRedact}
        />
        <FormInput
          label='Phone Number'
          type='text'
          required
          onChange={handleChange}
          name='phonenumber'
          value={phonenumber}
          disabled={!isRedact}
        />

        <h2>Address:</h2>

        <FormInput
          label='Country'
          type='text'
          required
          onChange={handleChangeAddress}
          name='county'
          value={county}
          disabled={!isRedact}
        />
        <FormInput
          label='City'
          type='text'
          required
          onChange={handleChangeAddress}
          name='city'
          value={city}
          disabled={!isRedact}
        />
        <FormInput
          label='Street'
          type='text'
          required
          onChange={handleChangeAddress}
          name='street'
          value={street}
          disabled={!isRedact}
        />
        <FormInput
          label='Building'
          type='text'
          required
          onChange={handleChangeAddress}
          name='building'
          value={building}
          disabled={!isRedact}
        />
        <FormInput
          label='Full delivery address'
          type='text'
          required
          onChange={handleChangeAddress}
          name='fulladdress'
          value={fulladdress}
          disabled={!isRedact}
        />
        <FormInput
          label='Postal Code'
          type='text'
          required
          onChange={handleChangeAddress}
          name='postalcode'
          value={postalcode}
          disabled={!isRedact}
        />

        <ButtonsContainer $hidden={!isRedact}>
          <CustomButton type='submit'>Save</CustomButton>
        </ButtonsContainer>
      </UserInfoFormElement>
      <ButtonsContainer $hidden={false}>
        <CustomButton onClick={() => setIsRedact(!isRedact)}>
          {isRedact ? 'Cancel' : 'Redact'}
        </CustomButton>
      </ButtonsContainer>
    </UserInfoConstainer>
  );
};

export default UserInfoForm;
