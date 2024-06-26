import React, { useEffect } from "react";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";
import { useSelector } from 'react-redux';
import router from 'next/router';


export default function Admin({ children }) {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/auth/login')
      }
    }
  }, [])


  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          {children}
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
