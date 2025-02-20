import { GITHUB_AUTH_ID, GITHUB_AUTH_SECRET } from '@/utils/getEnvVariable';
import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: GITHUB_AUTH_ID,
      clientSecret: GITHUB_AUTH_SECRET,
    }),
    GoogleProvider({
      clientId: GITHUB_AUTH_ID,
      clientSecret: GITHUB_AUTH_SECRET,
    }),
    // ...add more providers here
  ],
};

const { auth, handlers, signIn, sighOut } = NextAuth(authOptions);

export { auth, handlers, signIn, sighOut };
