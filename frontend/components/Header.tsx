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
    <div className="flex justify-between py-4 px-8 bg-yellow-600 text-white">
      <div className="font-bold text-xl">Forever Learning</div>

      {user ? (
        <ul className="flex">
          <Link href="/">
            <li className="mr-4 cursor-pointer font-bold">Tutorials</li>
          </Link>
          <Link href="/projects">
            <li className="mr-4 cursor-pointer font-bold">Projects</li>
          </Link>
          <Link href="#">
            <li className="mr-4 cursor-pointer font-bold" onClick={() => logoutHandler()}>
              Log out
            </li>
          </Link>
        </ul>
      ) : (
        <ul className="flex">
          <Link href="/login">
            <li className="mr-4 cursor-pointer font-bold">Login</li>
          </Link>
          <Link href="/register">
            <li className="mr-4 cursor-pointer font-bold">Register</li>
          </Link>
        </ul>
      )}
    </div>
  );
};

export default Header;
