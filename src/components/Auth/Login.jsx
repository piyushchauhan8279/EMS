import { useState } from "react";

function Login({ handleLogin }) {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="flex h-screen w-screen justify-center items-center px-4">
        <div className="w-full max-w-md">
          <form
            onSubmit={submitHandler}
            className="flex flex-col items-center justify-center p-8 sm:p-12 md:p-16 border-2 border-emerald-600 rounded-xl shadow-lg bg-white/10 backdrop-blur"
          >
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              placeholder="Enter your Email"
              className="w-full border-2 border-emerald-600 outline-none px-3 py-3 rounded-full bg-transparent text-base sm:text-lg md:text-xl placeholder-gray-400 mb-4"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              placeholder="Enter Password"
              className="w-full border-2 border-emerald-600 outline-none px-3 py-3 rounded-full bg-transparent text-base sm:text-lg md:text-xl placeholder-gray-400 mb-6"
            />
            <button className="w-full border-2 border-emerald-600 outline-none py-2 rounded-xl text-lg sm:text-xl text-white bg-emerald-600 hover:bg-emerald-700 transition">
              Log in
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
