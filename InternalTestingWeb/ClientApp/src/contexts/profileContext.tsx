import React, { createContext, useState, useEffect, ReactElement } from 'react';
import { IProfile } from '../models/profile.interface';
import { getProfile } from '../services/getProfile';

const Context = createContext<IProfile>({} as IProfile);

export interface ProfileContextProviderType {
  children: ReactElement;
}

export const ProfileContextProvider: React.FC<ProfileContextProviderType> = ({
  children,
}: ProfileContextProviderType) => {
  const [profile, setProfile] = useState<IProfile>({} as IProfile);

  useEffect(() => {
    getProfile()
      .then((profile) => {
        setProfile(profile);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <Context.Provider value={profile}>{children}</Context.Provider>;
};

export default Context;
