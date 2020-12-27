import Link from 'next/link';
import React, { useContext } from 'react';
import { AuthContext } from '../context/auth/AuthContext';
import { useRouter } from 'next/router';

const Header: React.FC = () => {
  const router = useRouter();
  const context = useContext(AuthContext);
  const { user, logout } = context;

  const logoutHandler = () => {
    logout();
    router.push('/login');
  };

  return (
    <div className="flex items-center justify-between h-12 px-4 py-4 text-white bg-yellow-600 md:px-8">
      <Link href="/">
        <div className="text-lg font-bold cursor-pointer md:text-xl">Forever Learning</div>
      </Link>

      {user ? (
        <ul className="flex">
          <Link href="/">
            <li className="mr-4 font-bold cursor-pointer text-md md:text-lg">Home</li>
          </Link>
          <Link href="#">
            <li className="mr-4 font-bold cursor-pointer text-md md:text-lg" onClick={() => logoutHandler()}>
              Log out
            </li>
          </Link>
        </ul>
      ) : (
        <ul className="flex">
          <Link href="/login">
            <li className="mr-4 font-bold cursor-pointer text-md md:text-lg">Login</li>
          </Link>
          <Link href="/register">
            <li className="mr-4 font-bold cursor-pointer text-md md:text-lg">Register</li>
          </Link>
        </ul>
      )}
    </div>
  );
};

export default Header;
