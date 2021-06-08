export interface IAddress {
  address1: string;
  address2: string;
  locality: string;
  administrativeArea: string;
  country: string;
  postalCode: string;
  type: string;
  preferred: boolean;
}

export interface IEmail {
  address: string;
  preferred: boolean;
  verified: boolean;
}

export interface IAccountIdentifiers {
  identifier: string;
  type: string;
}

export interface IPhoneNumber {
  number: string;
  preferred: boolean;
  verified: boolean;
  type: string;
}

export interface IProfile {
  dateOfBirth: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  emails?: IEmail[];
  addresses?: IAddress[];
  accountIdentifiers: IAccountIdentifiers[];
  phoneNumbers: IPhoneNumber[];
  nationalIdentifier: string;
  locale: string;
  serviceFlags: string[];
  version: number;
}
