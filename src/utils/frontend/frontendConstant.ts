import { NEXT_PUBLIC_BASE_PATH } from '../getEnvVariable';

export const HOME_URL = NEXT_PUBLIC_BASE_PATH + '/';
export const SIGNIN_URL = NEXT_PUBLIC_BASE_PATH + '/signin';

export enum SIGNIN_PROVIDER {
  GITHUB = 'github',
  GOOGLE = 'google',
  LINKEDIN = 'linkedin',
}
