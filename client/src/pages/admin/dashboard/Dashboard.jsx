import React from "react";
import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <main className="admin-panel-header-div"></main>
    </>
  );
};

export default Dashboard;
