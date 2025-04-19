import { signIn } from 'next-auth/react';
export default function Auth() {
  return <button onClick={() => signIn()}>Giriş Yap</button>;
}