import React from 'react';

const SocialButtons: React.FC = () => {
  return (
    <>
      <div className="flex mt-6 items-center">
        <div className="border-b border-solid border-gray-800 flex flex-1"></div>
        <div className="mx-3 font-medium">Or</div>
        <div className="border-b border-solid border-gray-800 flex flex-1"></div>
      </div>
      <button
        value="Log In"
        className="bg-gray-800 hover:bg-gray-700 text-white font-bold text-lg p-2 mt-6 cursor-pointer w-full"
      >
        Continue with Google
      </button>
    </>
  );
};

export default SocialButtons;
