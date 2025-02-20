import { SIGNIN_PROVIDER } from '@/utils/frontend/frontendConstant';
import { signIn, signOut } from 'next-auth/react';

export const login = async (providers: SIGNIN_PROVIDER) => {
  await signIn(providers);
};

export const logout = async () => {
  await signOut();
};
