import axios, { AxiosResponse } from 'axios';
import { IProfile } from '../models/profile.interface';
import { getInfoUser } from './utils';

const API_URL = 'https://profiles.api.dev-legalshield.com/v1/identities';
const info_user = getInfoUser();

// API Note:
//  You will need to enable the chrome extension
// 'Allow CORS: Access-Control-Allow-Origin'
//  to bypass cors issue in dev

const instance = axios.create({
  baseURL: `${API_URL}/${info_user.sub}/profile`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    SameSite: 'None',
  },
  withCredentials: true,
});

export const getProfile = async (): Promise<IProfile> => {
  return instance.get('').then((res: AxiosResponse<IProfile>) => res.data);
};
