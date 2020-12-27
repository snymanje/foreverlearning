import React from 'react';
import Link from 'next/link';
import SocialButtons from '../components/SocialButtons';
import Head from 'next/head';

const register: React.FC = () => {
  return (
    <>
      <Head>
        <title>Forever Learning - Sign Up</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-grow h-full my-auto">
        <div className="hidden w-1/2 lg:block">
          <div className="flex items-center justify-end w-full h-full">
            <img className="object-cover p-4" src="/SignUpScreen.svg" />
          </div>
        </div>
        <div className="flex flex-col w-full h-full bg-white lg:w-1/2">
          <div className="flex flex-col items-center justify-center h-full">
            <p className="text-3xl text-center text-gray-700">Sign up</p>
            <form className="flex flex-col w-2/3 pt-3 md:pt-8 md:w-1/2" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col pt-4">
                <label htmlFor="name" className="text-lg text-gray-700">
                  Name
                </label>
                <input
                  type="name"
                  id="name"
                  className="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex flex-col pt-4">
                <label htmlFor="email" className="text-lg text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
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
                />
              </div>

              <div className="flex flex-col pt-4">
                <label htmlFor="passwordConfirm" className="text-lg text-gray-700">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="passwordConfirm"
                  className="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                />
              </div>

              <input type="submit" value="Log In" className="mt-8 cursor-pointer btn-primary" />
            </form>

            <div className="w-2/3 md:w-1/2">
              <SocialButtons />
            </div>

            <div className="pt-12 pb-12 text-center">
              <p className="text-gray-700">
                Already have an account?{' '}
                <Link href="/login">
                  <a className="font-semibold text-gray-700 underline">Login in here.</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default register;
