export interface IUserInfo {
  id: string;
  firstname: string;
  lastname: string;
  phonenumber: string;
  address: {
    county: string;
    city: string;
    street: string;
    building: string;
    fulladdress: string;
    postalcode: string;
  };
}

export interface ISingInData {
  usernameOrEmail: string;
  password: string;
}

export interface IRegistrationData {
  username: string;
  email: string;
  password: string;
}
