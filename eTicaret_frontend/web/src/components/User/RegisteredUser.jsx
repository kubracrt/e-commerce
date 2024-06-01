import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { authRequest } from "../../redux/auth/request";
import { LOGIN_SUCCESS } from "../../utils/UserStatus";
import { useUser } from "../../redux/auth/hooks";

const RegisteredUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, status } = useSelector((state) => state.auth);
  const [email, setEmail] = useState("");
  const [loginError, setLoginError] = useState(""); 

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) {
      
      setLoginError("Email alanı boş bırakılamaz.");
    } else {
     
      dispatch(authRequest(email));
    }
  };

  useEffect(() => {
    if (status === LOGIN_SUCCESS) {
      const isAdmin = email === "kubracoruttt@gmail.com";
      navigate(isAdmin ? "/Admin" : "/Customer");
    }
  }, [status, email, navigate]);

  return (
    <div className="mt-6">
      <div className="flex justify-center items-center bg-gray-100 mt-12 h-[450px]">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-center text-2xl mb-4">Kayıtlı Kullanıcı</h2>
          {error && <p className="text-center text-red-500">{error}</p>}
          {loginError && <p className="text-center text-red-500">{loginError}</p>}
          {!status && (
            <form onSubmit={(e) => onSubmit(e)}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="text"
                  className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Mailinizi Giriniz"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  Giriş yap
                </button>
                <Link
                  to="/"
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  İptal
                </Link>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegisteredUser;
