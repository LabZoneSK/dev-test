import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import useAppDispatch from "../hooks/useAppDispatch";
import { fetchAllData } from "../api/dataFetch";

const Root = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch]);
  return (
    <div>
      <Navbar />
      <ToastContainer autoClose={2000} style={{ color: "#2980b9" }} />
      <main className="min-h-screen bg-gray-100">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Root;
