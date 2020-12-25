import React, { useContext, useState, ReactPropTypes, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import SocialButtons from '../components/SocialButtons';
import Head from 'next/head';
import { AuthContext } from '../context/auth/AuthContext';

const login: React.FC<ReactPropTypes> = (): JSX.Element => {
  const router = useRouter();
  const context = useContext(AuthContext);
  const { user, loading, error, localLogin } = context;

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  useEffect(() => {
    if (user) {
      router.push('/');
    }
  }, [user]);

  const localLoginHander = (e: React.FormEvent) => {
    e.preventDefault();
    localLogin({
      email,
      password
    });
    //  router.push('/');
  };

  return (
    <>
      <Head>
        <title>Forever Learning - Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-screen bg-white">
        <div className="flex w-full h-full">
          <div className="flex flex-col w-full h-full bg-white lg:w-1/2">
            <div className="flex flex-col items-center justify-center h-full trans">
              <p className="text-3xl text-center text-gray-700">Sign into your account</p>
              {user && <p>{user.email}</p>}
              {error && <p>{error}</p>}
              <form className="flex flex-col w-2/3 pt-3 md:pt-8 md:w-1/2" onSubmit={(e) => localLoginHander(e)}>
                <div className="flex flex-col pt-4">
                  <label htmlFor="email" className="text-lg text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="flex flex-col pt-4">
                  <label htmlFor="password" className="text-lg text-gray-700">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <input
                  type="submit"
                  value={loading ? 'Loading...' : 'Log In'}
                  className="mt-8 cursor-pointer btn-primary"
                />
              </form>
              <div className="w-2/3 md:w-1/2">
                <SocialButtons />
              </div>

              <div className="pt-12 pb-12 text-center">
                <p className="text-gray-700">
                  Don't have an account?{' '}
                  <Link href="/register">
                    <a className="font-semibold text-gray-700 underline">Register here.</a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="hidden w-1/2 lg:block">
            <div className="flex items-center justify-start w-full h-full">
              <img className="object-cover p-4" src="/SignInScreen.svg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default login;
