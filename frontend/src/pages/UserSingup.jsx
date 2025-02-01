import { Link } from "react-router-dom";
import { useState } from "react";
const UserSingup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastName] = useState("");
  const [userData, setUserData] = useState({});
  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
    });
    console.log(userData);
    setEmail("");
    setFirstname("");
    setLastName("");
    setPassword("");
  };
  return (
    <>
      <div className="p-7 h-screen flex flex-col justify-between">
        <div>
          <img
            className="w-16 mb-10"
            src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
            alt=""
          />
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <h3 className="text-base font-medium  w-1/2 mb-2">
              What's your name
            </h3>
            <div className="flex gap-4 mb-6">
              <input
                required
                className="bg-[#eeeeee]  w-1/2 rounded px-4 py-2 border  text-lg placeholder:text-sm"
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => {
                  setFirstname(e.target.value);
                }}
              />
              <input
                required
                className="bg-[#eeeeee] rounded px-4 py-2 border  text-lg w-1/2 placeholder:text-sm"
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </div>
            <h3 className="text-base font-medium mb-2">What's your email</h3>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
              className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
              type="email"
              placeholder="email@example.com"
            />
            <h3 className="text-base font-medium mb-2">Enter Password</h3>
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
              className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
              type="password"
              placeholder="password"
            />
            <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-base placeholder:text-sm">
              Login
            </button>
            <p className="text-center">
              Already have a account?{" "}
              <Link to="/login" className="text-blue-600">
                login here{" "}
              </Link>{" "}
            </p>
          </form>
        </div>
        <div>
          <p className="text-[10px] leading-tight">
            This site is protected by reCAPTCHA and the{" "}
            <span className="underline">Google Privacy Policy</span> and{" "}
            <span className="underline">Terms of Service apply</span>.
          </p>
        </div>
      </div>
    </>
  );
};
export default UserSingup;
