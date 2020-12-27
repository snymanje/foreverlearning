import React from 'react';

const SocialButtons: React.FC = () => {
  return (
    <>
      <div className="flex items-center mt-4">
        <div className="flex flex-1 border-b border-gray-800 border-solid"></div>
        <div className="mx-3 font-medium">Or</div>
        <div className="flex flex-1 border-b border-gray-800 border-solid"></div>
      </div>
      <button
        value="Log In"
        className="w-full p-2 mt-4 text-sm font-bold text-white bg-gray-800 cursor-pointer hover:bg-gray-700"
      >
        Continue with Google
      </button>
    </>
  );
};

export default SocialButtons;
