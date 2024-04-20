export interface IUserInfo {
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
