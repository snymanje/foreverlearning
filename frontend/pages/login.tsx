import { useContext, useState } from 'react';
import Link from 'next/link';
import SocialButtons from '../components/SocialButtons';
import { AuthContext } from '../context/auth/authContext';
import Head from 'next/head';

const login: React.FC = () => {
  const authContext = useContext(AuthContext);
  const { user, loading, error, localLogin } = authContext;

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

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

      <div className="bg-white h-screen">
        <div className="flex w-full h-full">
          <div className="flex flex-col w-full lg:w-1/2 h-full bg-white">
            <div className="flex h-24 justify-center items-center">
              <Link href="/">
                <a className="bg-yellow-600 text-white font-bold text-xl p-4 mt-8">Forever Learning</a>
              </Link>
            </div>
            <div className="flex flex-col h-full justify-center items-center trans">
              <p className="text-center text-3xl text-gray-700">Sign into your account</p>
              {user && <p>{user.email}</p>}
              {error && <p>{error}</p>}
              <form className="flex flex-col pt-3 md:pt-8 w-2/3 md:w-1/2" onSubmit={(e) => localLoginHander(e)}>
                <div className="flex flex-col pt-4">
                  <label htmlFor="email" className="text-lg text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
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
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <input type="submit" value="Log In" className="btn-primary mt-8 cursor-pointer" />
              </form>
              <div className="w-2/3 md:w-1/2">
                <SocialButtons />
              </div>

              <div className="text-center pt-12 pb-12">
                <p className="text-gray-700">
                  Don't have an account?{' '}
                  <Link href="/register">
                    <a className="underline font-semibold text-gray-700">Register here.</a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/2 hidden lg:block">
            <div className="flex justify-start items-center h-full w-full">
              <img className="object-cover p-4" src="/SignInScreen.svg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default login;
