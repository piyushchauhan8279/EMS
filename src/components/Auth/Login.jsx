import { useState } from "react";
function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("email is " + email);
    console.log("password is " + password);

    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="flex h-screen w-screen justify-center items-center">
        <div>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
            className="flex flex-col items-center justify-center p-20 border-2 border-emerald-600 rounded-xl"
          >
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
              type="email"
              placeholder="Enter your Email"
              className="border-2 border-emerald-600 outline-none px-3 py-3 rounded-full bg-transparent text-xl placeholder-gray-400 mb-4"
            />
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
              type="password"
              placeholder="Enter Password"
              className="border-2 border-emerald-600 outline-none px-3 py-3 rounded-full placeholder-gray-400 bg-transparent text-xl mb-6 "
            />
            <button className="border-2 border-emerald-600 outline-none py-2 rounded-xl  w-50 text-xl text-white bg-emerald-600">
              Log in
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
