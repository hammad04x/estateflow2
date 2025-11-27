import React, { useState } from "react";
import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";
import {
  HiOutlineArrowLeft,
  HiOutlineArrowRight,
} from "react-icons/hi";
import { MdDeleteForever } from "react-icons/md";
import { IoPencil } from "react-icons/io5";
import Breadcrumb from "../layout/Breadcrumb";

const Coupon = () => {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <>
      <Navbar />
      <Sidebar />
      <main className="admin-panel-header-div">
        <Breadcrumb
          title="Coupon"
          breadcrumbText="Coupon List"
          button={{ link: "/admin/create-coupon", text: "Create Coupon" }}
        />
        <div className="admin-panel-header-tabs">
          <button
            className={`admin-panel-header-tab 
                ${activeTab === "All" ? "active" : ""}`}
            onClick={() => setActiveTab("All")}
          >
            All
          </button>
          <button
            className={`admin-panel-header-tab 
                ${activeTab === "Active" ? "active" : ""}`}
            onClick={() => setActiveTab("Active")}
          >
            Active
          </button>
          <button
            className={`admin-panel-header-tab 
                ${activeTab === "Disable" ? "active" : ""}`}
            onClick={() => setActiveTab("Disable")}
          >
            Disable
          </button>
          <button
            className={`admin-panel-header-tab 
                ${activeTab === "Expired" ? "active" : ""}`}
            onClick={() => setActiveTab("Expired")}
          >
            Expired
          </button>
        </div>

        <div className="dashboard-table-container">
          <table>
            <thead>
              <tr>
                <th>Coupon Code</th>
                <th>Discount</th>
                <th>Max</th>
                <th>Min</th>
                <th>Start</th>
                <th>Expiry</th>
                <th>Status</th>
                <th>Created</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="product-coupon-code">
                  SOMERANDOMCODEHERE
                </td>
                <td className="product-stock-keeping-unit discount">15%</td>
                <td>₹2000</td>
                <td>30000</td>
                <td>01 Feb 2024</td>
                <td>31 Oct 2024</td>
                <td>
                  <span className="status published">Active</span>
                </td>
                <td>24 Jan 2024</td>
                <td className="actions">
                  <IoPencil />
                  <MdDeleteForever />
                </td>
              </tr>
              <tr>
                <td className="product-coupon-code">
                  SOMERANDOMCODEHERE
                </td>
                <td className="product-stock-keeping-unit">15%</td>
                <td>₹2000</td>
                <td>30000</td>
                <td>01 Feb 2024</td>
                <td>31 Oct 2024</td>
                <td>
                  <span className="status published">Active</span>
                </td>
                <td>24 Jan 2024</td>
                <td className="actions">
                  <IoPencil />
                  <MdDeleteForever />
                </td>
              </tr>
              <tr>
                <td className="product-coupon-code">
                  SOMERANDOMCODEHERE
                </td>
                <td className="product-stock-keeping-unit">15%</td>
                <td>₹2000</td>
                <td>30000</td>
                <td>01 Feb 2024</td>
                <td>31 Oct 2024</td>
                <td>
                  <span className="status low-stock">Disable</span>
                </td>
                <td>24 Jan 2024</td>
                <td className="actions">
                  <IoPencil />
                  <MdDeleteForever />
                </td>
              </tr>
              <tr>
                <td className="product-coupon-code">
                  SOMERANDOMCODEHERE
                </td>
                <td className="product-stock-keeping-unit">15%</td>
                <td>₹2000</td>
                <td>30000</td>
                <td>01 Feb 2024</td>
                <td>31 Oct 2024</td>
                <td>
                  <span className="status published">Active</span>
                </td>
                <td>24 Jan 2024</td>
                <td className="actions">
                  <IoPencil />
                  <MdDeleteForever />
                </td>
              </tr>
              <tr>
                <td className="product-coupon-code">
                  SOMERANDOMCODEHERE
                </td>
                <td className="product-stock-keeping-unit">15%</td>
                <td>₹2000</td>
                <td>30000</td>
                <td>01 Feb 2024</td>
                <td>31 Oct 2024</td>
                <td>
                  <span className="status low-stock">Disable</span>
                </td>
                <td>24 Jan 2024</td>
                <td className="actions">
                  <IoPencil />
                  <MdDeleteForever />
                </td>
              </tr>
              <tr>
                <td className="product-coupon-code">
                  SOMERANDOMCODEHERE
                </td>
                <td className="product-stock-keeping-unit">15%</td>
                <td>₹2000</td>
                <td>30000</td>
                <td>01 Feb 2024</td>
                <td>31 Oct 2024</td>
                <td>
                  <span className="status published">Active</span>
                </td>
                <td>24 Jan 2024</td>
                <td className="actions">
                  <IoPencil />
                  <MdDeleteForever />
                </td>
              </tr>
              <tr>
                <td className="product-coupon-code">
                  SOMERANDOMCODEHERE
                </td>
                <td className="product-stock-keeping-unit">15%</td>
                <td>₹2000</td>
                <td>30000</td>
                <td>01 Feb 2024</td>
                <td>31 Oct 2024</td>
                <td>
                  <span className="status out-of-stock">Expired</span>
                </td>
                <td>24 Jan 2024</td>
                <td className="actions">
                  <IoPencil />
                  <MdDeleteForever />
                </td>
              </tr>
              <tr>
                <td className="product-coupon-code">
                  SOMERANDOMCODEHERE
                </td>
                <td className="product-stock-keeping-unit">15%</td>
                <td>₹2000</td>
                <td>30000</td>
                <td>01 Feb 2024</td>
                <td>31 Oct 2024</td>
                <td>
                  <span className="status low-stock">Disable</span>
                </td>
                <td>24 Jan 2024</td>
                <td className="actions">
                  <IoPencil />
                  <MdDeleteForever />
                </td>
              </tr>
              <tr>
                <td className="product-coupon-code">
                  SOMERANDOMCODEHERE
                </td>
                <td className="product-stock-keeping-unit">15%</td>
                <td>₹2000</td>
                <td>30000</td>
                <td>01 Feb 2024</td>
                <td>31 Oct 2024</td>
                <td>
                  <span className="status published">Active</span>
                </td>
                <td>24 Jan 2024</td>
                <td className="actions">
                  <IoPencil />
                  <MdDeleteForever />
                </td>
              </tr>
              <tr>
                <td className="product-coupon-code">
                  SOMERANDOMCODEHERE
                </td>
                <td className="product-stock-keeping-unit">15%</td>
                <td>₹2000</td>
                <td>30000</td>
                <td>01 Feb 2024</td>
                <td>31 Oct 2024</td>
                <td>
                  <span className="status published">Active</span>
                </td>
                <td>24 Jan 2024</td>
                <td className="actions">
                  <IoPencil />
                  <MdDeleteForever />
                </td>
              </tr>
              <tr>
                <td className="product-coupon-code">
                  SOMERANDOMCODEHERE
                </td>
                <td className="product-stock-keeping-unit">15%</td>
                <td>₹2000</td>
                <td>30000</td>
                <td>01 Feb 2024</td>
                <td>31 Oct 2024</td>
                <td>
                  <span className="status out-of-stock">Expired</span>
                </td>
                <td>24 Jan 2024</td>
                <td className="actions">
                  <IoPencil />
                  <MdDeleteForever />
                </td>
              </tr>
              <tr>
                <td className="product-coupon-code">
                  SOMERANDOMCODEHERE
                </td>
                <td className="product-stock-keeping-unit">15%</td>
                <td>₹2000</td>
                <td>30000</td>
                <td>01 Feb 2024</td>
                <td>31 Oct 2024</td>
                <td>
                  <span className="status published">Active</span>
                </td>
                <td>24 Jan 2024</td>
                <td className="actions">
                  <IoPencil />
                  <MdDeleteForever />
                </td>
              </tr>
              <tr>
                <td className="product-coupon-code">
                  SOMERANDOMCODEHERE
                </td>
                <td className="product-stock-keeping-unit">15%</td>
                <td>₹2000</td>
                <td>30000</td>
                <td>01 Feb 2024</td>
                <td>31 Oct 2024</td>
                <td>
                  <span className="status published">Active</span>
                </td>
                <td>28 Jun 2023</td>
                <td className="actions">
                  <IoPencil />
                  <MdDeleteForever />
                </td>
              </tr>
            </tbody>
          </table>

          <div className="table-footer-pagination">
            <span>Showing 1-10 from 100</span>
            <ul className="pagination">
              <li className="arrow">
                <HiOutlineArrowLeft />
              </li>
              <li className="">01</li>
              <li>02</li>
              <li>03</li>
              <li>04</li>
              <li>05</li>
              <li className="arrow">
                <HiOutlineArrowRight />
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
};

export default Coupon;
