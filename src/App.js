import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/Signup";
import Forget from "./components/Forget";
import Reset from "./components/resetpassword";
import Adddocuments from "./components/Adddocuments";
import Users from "./components/Users";
import Company from "./components/Company";
import Companydocs from "./components/uploadcosCompany";
import Profile from "./components/profile";
import toast, { Toaster } from "react-hot-toast";
import { loadUser } from "./redux/action/useravtion";
import Header from "./components/Header";
import UploadDoc from "./components/uploadcosCompany";

const App = () => {
  const { isAuthenticated, user, message, error } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, message]);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <Router>
      {isAuthenticated && <Header user={user} />}
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <Navigate to="/profile" /> : <Login />}
        />
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/profile" /> : <Login />}
        />
        <Route
          path="/signup"
          element={isAuthenticated ? <Navigate to="/profile" /> : <Signup />}
        />
        <Route
          path="/profile"
          element={isAuthenticated ? <Profile user={user} /> : <Navigate to="/login" />}
        />
        <Route path="/forgetPassword" element={<Forget />} />
        <Route path="/resetPassword" element={<Reset />} />
        <Route
          path="/admin/addDocuments"
          element={isAuthenticated && user?.role === "admin" ? <Adddocuments /> : <Navigate to="/login" />}
        />
        <Route
          path="/admin/Users"
          element={isAuthenticated && user?.role === "admin" ? <Users /> : <Navigate to="/login" />}
        />
        <Route
          path="/admin/company"
          element={isAuthenticated && user?.role === "admin" ? <Company /> : <Navigate to="/login" />}
        />
       
        <Route
          path="/uploaddocument"
          element={isAuthenticated ?<UploadDoc/>:<Navigate to="/login" />}
        />
      </Routes>
      <Toaster />
    </Router>
  );
};

export default App;
