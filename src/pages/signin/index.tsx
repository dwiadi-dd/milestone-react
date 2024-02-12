import React from "react";

const LoginPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-stone-100">
      <div className="w-1/4 p-6 py-14 bg-white rounded-xl">
        <h2 className="text-4xl font-theme mb-6 text-center font-bold text-amber-500">
          digiWish
        </h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-bold">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded-xl border-b-4 border-black outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 font-bold">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border border-gray-300 rounded-xl border-b-4 border-black outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-amber-500 text-white font-bold rounded hover:bg-amber-600"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
