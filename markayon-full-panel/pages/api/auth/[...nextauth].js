
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize(credentials) {
        if (credentials.email === 'tariikkucukk@gmail.com' && credentials.password === '12345678') {
          return { id: 1, name: 'Tarık', email: 'tariikkucukk@gmail.com' };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: '/auth',
  },
  secret: process.env.NEXTAUTH_SECRET,
});
