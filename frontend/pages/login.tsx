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
  };

  return (
    <>
      <Head>
        <title>Forever Learning - Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-grow h-full my-auto">
        <div className="flex flex-col w-full mx-4 lg:w-1/2">
          <div className="flex flex-col items-center justify-center w-full h-full">
            <p className="text-2xl text-center text-gray-700 md:text-3xl">Sign into your account</p>
            {error && <p>{error}</p>}
            <form className="flex flex-col w-full pt-3 mx-4 md:pt-8 md:w-1/2" onSubmit={(e) => localLoginHander(e)}>
              <div className="flex flex-col pt-4">
                <label htmlFor="email" className="text-base text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-2 py-2 mt-1 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="flex flex-col pt-4">
                <label htmlFor="password" className="text-base text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-2 py-2 mt-1 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <input
                type="submit"
                value={loading ? 'Loading...' : 'Log In'}
                className="p-2 mt-8 text-sm font-bold text-white bg-yellow-600 cursor-pointer hover:bg-yellow-500"
              />
            </form>
            <div className="w-full md:w-1/2">
              <SocialButtons />
            </div>

            <div className="pt-12 pb-12 text-center">
              <p className="text-sm text-gray-700">
                Don't have an account?{' '}
                <Link href="/register">
                  <a className="text-sm font-semibold text-gray-700 underline">Register here.</a>
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
    </>
  );
};

export default login;
