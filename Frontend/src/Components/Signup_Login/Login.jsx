import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contacts/AuthProvider";
import googleLog from "../../assets/google-logo.svg";

const Login = () => {
  const { user, login, loginWithGoogle } = useContext(AuthContext); // Fetch user from AuthContext
  const [error, setError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]); //  Navigate if user is already logged in

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password).then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        alert("Login Successfully")
        navigate(from, {replace: true})
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage)
      });
    


    createUser(email, password)
      .then((userCredential) => {
        console.log("User created successfully:", userCredential.user);
        alert("Sign Up Successfully!!!");
        navigate("/"); //  Signup ke baad direct home page pe bhej do
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          alert("This email is already registered. Redirecting to Home...");
          navigate("/"); //  Agar user already registered hai toh bhi home page pe bhej do
        } else {
          setError(error.message);
        }
      });
  };

  //login with google
  const handleRegister = () => {
    loginWithGoogle()
      .then((result) => {
        const user = result.user;
        alert("This email is already registered. Redirecting to Home...");
        navigate("/");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          alert("This email is already registered. Redirecting to Home...");
          navigate("/"); //  Agar user already registered hai toh bhi home page pe bhej do
        } else {
          setError(error.message);
        }
      });
  };
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-semibold">Login Form</h1>
            {error && <p className="text-red-500">{error}</p>}
            <form onSubmit={handleLogin} className="py-8 space-y-4">
              <input
                id="email"
                name="email"
                type="email"
                className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900"
                placeholder="Email address"
                required
              />
              <input
                id="password"
                name="password"
                type="password"
                className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900"
                placeholder="Password"
                required
              />
              {error ? <p className="text-red-600 text-base">Email or Password is not correct ):</p> : ""}
              <p>
                Don't have an account?{" "}
                <Link to="/signup" className="text-blue-700 underline">
                  Signup
                </Link>
              </p>
              <button className="bg-blue-500 text-white rounded-md px-6 py-2">
                Login
              </button>
            </form>

            <hr />
            <div className="flex w-full items-center flex-col mt-5 gap-3">
              <button onClick={handleRegister} className="block">
                <img
                  src={googleLog}
                  alt=""
                  className="w-12 h-12 inline-block"
                />
                Login with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
