import { useState } from "react";

function Login({ closeLogin }) {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [showpassword, setShowpassword] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const [name, setName] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");

  const [message, setMessage] = useState("");
  const [forgotPassword, setForgotPassword] = useState(false);
  const [resetCode, setResetCode] = useState("");
  const [enteredCode, setEnteredCode] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleContinue = () => {
    if (email.trim() !== "") {
      setShowpassword(true);
      setMessage("");
    } else {
      setMessage("please enter your email");
    }
  };
  const handleLogin = () => {
    const user = JSON.parse(localStorage.getItem("meUser"));

    if (!user) {
      setMessage("user not found, please sign up first");
      return;
    }
    if (email === user.email && password === user.password) {
      localStorage.setItem("loggedIn", "true");
      closeLogin();
    } else {
      setMessage("incorrect email or password");
    }
  };
  const handleForgotPassword = () => {
    const savedUser = localStorage.getItem("meUser");

    if (!savedUser) {
      setMessage("No account found. Please sign up first.");
      return;
    }

    const user = JSON.parse(savedUser);

    if (email.trim().toLowerCase() !== user.email.toLowerCase()) {
      setMessage("This email is not registered.");
      return;
    }

    const code = Math.floor(100000 + Math.random() * 900000);

    localStorage.setItem("resetCode", code);

    setResetCode(String(code));
    setMessage(`Your verification code is ${code}`);
  };

  const handleVerifyCode = () => {
    const savedCode = localStorage.getItem("resetCode");

    if (enteredCode === savedCode) {
      setMessage("Code verified. Enter your new password.");
    } else {
      setMessage("Incorrect verification code.");
    }
  };

  const handleResetPassword = () => {
    if (newPassword.trim() === "") {
      setMessage("Please enter a new password.");
      return;
    }

    const savedUser = localStorage.getItem("meUser");

    if (!savedUser) {
      setMessage("User not found.");
      return;
    }

    const user = JSON.parse(savedUser);

    const updatedUser = {
      ...user,
      password: newPassword,
    };

    localStorage.setItem("meUser", JSON.stringify(updatedUser));

    localStorage.removeItem("resetCode");

    setMessage("Password changed successfully. You can now login.");

    setForgotPassword(false);
    setEnteredCode("");
    setNewPassword("");
  };

  const handleSignUp = () => {
    if (
      name.trim() === "" ||
      signUpEmail.trim() === "" ||
      signUpPassword.trim() === ""
    ) {
      setMessage("please fill in all the fields");
      return;
    }
    const existingUser = localStorage.getItem("meUser");
    if (existingUser) {
      const user = JSON.parse(existingUser);

      if (signUpEmail.trim().toLowerCase() === user.email.toLowerCase()) {
        setMessage("This email is already registered. Please login.");
        return;
      }
    }
    const newUser = {
      name: name,
      email: signUpEmail,
      password: signUpPassword,
    };

    localStorage.setItem("meUser", JSON.stringify(newUser));
    localStorage.setItem("loggedIn", "true");

    setName("");
    setSignUpEmail("");
    setSignUpPassword("");

    setMessage("");
    closeLogin();
  };
  if (forgotPassword) {
    return (
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center">Reset Password</h2>

        <p className="text-sm text-gray-500 text-center mt-2">
          Enter your registered email address.
        </p>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full px-4 py-3 mt-5 border rounded-lg outline-none focus:ring-2 focus:ring-orange-400"
        />

        <button
          type="button"
          onClick={handleForgotPassword}
          className="w-full mt-4 py-3 bg-orange-400 text-white rounded-lg font-semibold"
        >
          Get Verification Code
        </button>

        {resetCode && (
          <>
            <input
              type="text"
              value={enteredCode}
              onChange={(e) => setEnteredCode(e.target.value)}
              placeholder="Enter verification code"
              className="w-full px-4 py-3 mt-4 border rounded-lg outline-none"
            />

            <button
              type="button"
              onClick={handleVerifyCode}
              className="w-full mt-3 py-3 bg-blue-600 text-white rounded-lg font-semibold"
            >
              Verify Code
            </button>

            {enteredCode === localStorage.getItem("resetCode") && (
              <>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter new password"
                  className="w-full px-4 py-3 mt-4 border rounded-lg outline-none"
                />

                <button
                  type="button"
                  onClick={handleResetPassword}
                  className="w-full mt-3 py-3 bg-green-600 text-white rounded-lg font-semibold"
                >
                  Change Password
                </button>
              </>
            )}
          </>
        )}

        {message && (
          <p className="text-center text-sm text-red-500 mt-4">{message}</p>
        )}

        <button
          type="button"
          onClick={() => {
            setForgotPassword(false);
            setResetCode("");
            setEnteredCode("");
            setNewPassword("");
            setMessage("");
          }}
          className="w-full mt-4 py-3 border-blue-300 mx-50 rounded-lg font-semibold"
        >
          Back to Login
        </button>
      </div>
    );
  }

  if (showSignUp) {
    return (
      <div className="w-full max-w-md rounded-2xl shadow-lg p-6 min-h-60">
        <div className="min-h-80 bg-white rounded-xl border-blue-600 mt-3 ">
          <h2 className="flex capitalized justify-center  rounded-xl  mx-10 border-lemon-600 bg-blue-600 py-2 px-2 mt-5 ">
            Create Your Fitme Account
          </h2>

          <p className="flex capitalized justify-center mt-3 rounded-xl mx-10 border-blue-600 bg-blue-600 px-2 py-2">
            signup to Continue
          </p>

          {message && <p>{message}</p>}
          <div className="flex  gap-4 justify-center mt-3 mx-5">
            <label className="py-2 px-2 ">Full Name</label>
            <input
              type="text"
              value={name}
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
              className="rounded-xl py-2 px-2 border-orange-600 "
            />
          </div>
          <div className="flex gap-4 justify-center mt-3 py-2 px-2 mx-5">
            <label className="py-2 ">Email Address</label>
            <input
              type="email"
              value={signUpEmail}
              placeholder="Enter your email"
              onChange={(e) => setSignUpEmail(e.target.value)}
              className="rounded-xl py-2 px-2 border-orange-600 "
            />
          </div>
          <div className="flex gap-4 justify-center mt-3 mx-5 py-2 px-2">
            <label className="py-2">Password</label>
            <input
              type="password"
              value={signUpPassword}
              placeholder="Enter your password"
              onChange={(e) => setSignUpPassword(e.target.value)}
              className="rounded-xl py-2 px-2 border-orange-600  "
            />
          </div>
          <div className="flex  gap-4 justify-center mt-3 mx-5  py-2 px-2">
            <button
              onClick={handleSignUp}
              className="rounded-xl py-2 px-10 border-orange-600 bg-orange-600"
            >
              sign up
            </button>
            <button
              type="button"
              onClick={() => {
                setShowSignUp(false);

                setName("");
                setSignUpEmail("");
                setSignUpPassword("");

                setMessage("");
              }}
              className="rounded-xl py-2 px-5 border-blue-600 bg-orange-600 "
            >
              Back to Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-40 bg-gray-100  items-center justify-center px-2 py-2 sm:px-6 mx-100">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg flex justify-center sm:p-8">
        <h2>log in or sign up</h2>
      </div>

      <div className="text-2xl flex justify-center sm:text-3xl font-bold text-gray-900 mt-2">
        <h1>welcome to BarberShop</h1>
      </div>

      <div>
        <form>
          <label
            htmlFor="Email"
            className="block text-sm font-medi text-black mt-5"
          >
            Email Address
          </label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-gray-500 focus:border-black transition"
          />
          {!showpassword && (
            <button
              type="button"
              onClick={handleContinue}
              className=" text-center mt-4 w-full sm:w-1/2 py-3 px-5 rounded-lg border hover:bg-gray-100
      text-[#d4af37]
      capitalize  font-semibold text-sm sm:text-base transition"
            >
              Continue
            </button>
          )}

          {showpassword && (
            <div>
              <label
                htmlFor="password"
                className=" text-sm font-medium text-gray-700 mt-5"
              >
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
              />
              {message && (
                <p className="text-red-500 text-sm mt-2 text-center">
                  {message}
                </p>
              )}
              <div className="text-right mt-2">
                <button
                  type="button"
                  onClick={() => {
                    setForgotPassword(true);
                    setMessage("");
                  }}
                  className="w-full sm:w-1/2 py-3  rounded-lg border bg-orange-600 border-gray-600 text-white-600 font-semibold text-sm sm:text-base hover:bg-gray-50 transition"
                >
                  Forgot password?
                </button>
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 mt-5">
            <button
              type="button"
              onClick={handleLogin}
              className="w-full sm:w-1/2 py-3 px-5 rounded-lg border hover:bg-gray-100
      text-[#d4af37]
      capitalize font-semibold text-sm sm:text-base transition"
            >
              Login
            </button>

            <button
              type="button"
              onClick={() => {
                setShowSignUp(true);
                setMessage("");
              }}
              className="w-full sm:w-1/2 py-3 px-5 rounded-lg border  hover:bg-gray-100
      text-[#d4af37]
      capitalize font-semibold text-sm sm:text-base transition"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
