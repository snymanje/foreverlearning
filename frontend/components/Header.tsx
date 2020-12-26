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
    <div className="flex justify-between px-8 py-4 text-white bg-yellow-600">
      <div className="text-xl font-bold">Forever Learning</div>

      {user ? (
        <ul className="flex">
          <Link href="/">
            <li className="mr-4 font-bold cursor-pointer">Home</li>
          </Link>
          <Link href="#">
            <li className="mr-4 font-bold cursor-pointer" onClick={() => logoutHandler()}>
              Log out
            </li>
          </Link>
        </ul>
      ) : (
        <ul className="flex">
          <Link href="/login">
            <li className="mr-4 font-bold cursor-pointer">Login</li>
          </Link>
          <Link href="/register">
            <li className="mr-4 font-bold cursor-pointer">Register</li>
          </Link>
        </ul>
      )}
    </div>
  );
};

export default Header;
