import React, { useState } from "react";
import { IoIosEye } from "react-icons/io";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import DashboardProImage from "../../../assets/image/dashboard_product_img.png";
import { MdDeleteForever } from "react-icons/md";
import { IoPencil } from "react-icons/io5";
import "../../../assets/css/admin/product.css";
import Sidebar from "../layout/Sidebar";
import Navbar from "../layout/Navbar";
import Breadcrumb from "../layout/Breadcrumb";

const Product = () => {
  const [activeTab, setActiveTab] = useState("All Products");

  return (
    <>
      <Sidebar />
      <Navbar />
      <main className="admin-panel-header-div">
        <Breadcrumb
          title="Product"
          breadcrumbText="Product List"
          button={{ link: "/admin/add-product", text: "Add Product" }}
        />
        <div className="admin-panel-header-tabs">
          <button
            className={`admin-panel-header-tab 
                ${activeTab === "All Products" ? "active" : ""}`}
            onClick={() => setActiveTab("All Products")}
          >
            All Products
          </button>
          <button
            className={`admin-panel-header-tab 
                ${activeTab === "Published" ? "active" : ""}`}
            onClick={() => setActiveTab("Published")}
          >
            Published
          </button>
          <button
            className={`admin-panel-header-tab 
                ${activeTab === "Low Stock" ? "active" : ""}`}
            onClick={() => setActiveTab("Low Stock")}
          >
            Low Stock
          </button>
          <button
            className={`admin-panel-header-tab 
                ${activeTab === "Draft" ? "active" : ""}`}
            onClick={() => setActiveTab("Draft")}
          >
            Draft
          </button>
          <button
            className={`admin-panel-header-tab 
                ${activeTab === "Out Of Stock" ? "active" : ""}`}
            onClick={() => setActiveTab("Out Of Stock")}
          >
            Out of Stock
          </button>
        </div>

        <div className="dashboard-table-container">
          <table>
            <thead>
              <tr>
                <th style={{ width: "24%" }}>Product</th>
                <th style={{ width: "10%" }}>SKU</th>
                <th style={{ width: "12%" }}>Category</th>
                <th style={{ width: "8%" }}>Stock</th>
                <th style={{ width: "8%" }}>Price</th>
                <th style={{ width: "14%" }}>Status</th>
                <th style={{ width: "12%" }}>Added</th>
                <th style={{ width: "12%" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="product-info">
                  <img src={DashboardProImage} alt="iPhone 11 Pro" />
                  <span>iPhone 11 Pro</span>
                </td>
                <td className="product-stock-keeping-unit">302012</td>
                <td>iPhone</td>
                <td>10</td>
                <td>₹59000</td>
                <td>
                  <span className="status published">Published</span>
                </td>
                <td>24 Jun 2023</td>
                <td className="actions">
                  <IoPencil />
                  <IoIosEye />
                  <MdDeleteForever />
                </td>
              </tr>
              <tr>
                <td className="product-info">
                  <img src={DashboardProImage} alt="iPhone 11 Pro" />
                  <span>iPhone 11 Pro</span>
                </td>
                <td className="product-stock-keeping-unit">302012</td>
                <td>iPhone</td>
                <td>10</td>
                <td>₹59000</td>
                <td>
                  <span className="status draft">Draft</span>
                </td>
                <td>24 Jun 2023</td>
                <td className="actions">
                  <IoPencil />
                  <IoIosEye />
                  <MdDeleteForever />
                </td>
              </tr>
              <tr>
                <td className="product-info">
                  <img src={DashboardProImage} alt="iPhone 11 Pro" />
                  <span>iPhone 11 Pro</span>
                </td>
                <td className="product-stock-keeping-unit">302012</td>
                <td>iPhone</td>
                <td>10</td>
                <td>₹59000</td>
                <td>
                  <span className="status out-of-stock">Out of Stock</span>
                </td>
                <td>24 Jun 2023</td>
                <td className="actions">
                  <IoPencil />
                  <IoIosEye />
                  <MdDeleteForever />
                </td>
              </tr>
              <tr>
                <td className="product-info">
                  <img src={DashboardProImage} alt="iPhone 11 Pro" />
                  <span>iPhone 11 Pro</span>
                </td>
                <td className="product-stock-keeping-unit">302012</td>
                <td>iPhone</td>
                <td>10</td>
                <td>₹59000</td>
                <td>
                  <span className="status low-stock">Low Stock</span>
                </td>
                <td>24 Jun 2023</td>
                <td className="actions">
                  <IoPencil />
                  <IoIosEye />
                  <MdDeleteForever />
                </td>
              </tr>
              <tr>
                <td className="product-info">
                  <img src={DashboardProImage} alt="iPhone 11 Pro" />
                  <span>iPhone 11 Pro</span>
                </td>
                <td className="product-stock-keeping-unit">302012</td>
                <td>iPhone</td>
                <td>10</td>
                <td>₹59000</td>
                <td>
                  <span className="status published">Published</span>
                </td>
                <td>24 Jun 2023</td>
                <td className="actions">
                  <IoPencil />
                  <IoIosEye />
                  <MdDeleteForever />
                </td>
              </tr>
              <tr>
                <td className="product-info">
                  <img src={DashboardProImage} alt="iPhone 11 Pro" />
                  <span>iPhone 11 Pro</span>
                </td>
                <td className="product-stock-keeping-unit">302012</td>
                <td>iPhone</td>
                <td>10</td>
                <td>₹59000</td>
                <td>
                  <span className="status draft">Draft</span>
                </td>
                <td>24 Jun 2023</td>
                <td className="actions">
                  <IoPencil />
                  <IoIosEye />
                  <MdDeleteForever />
                </td>
              </tr>
              <tr>
                <td className="product-info">
                  <img src={DashboardProImage} alt="iPhone 11 Pro" />
                  <span>iPhone 11 Pro</span>
                </td>
                <td className="product-stock-keeping-unit">302012</td>
                <td>iPhone</td>
                <td>10</td>
                <td>₹59000</td>
                <td>
                  <span className="status out-of-stock">Out of Stock</span>
                </td>
                <td>24 Jun 2023</td>
                <td className="actions">
                  <IoPencil />
                  <IoIosEye />
                  <MdDeleteForever />
                </td>
              </tr>
              <tr>
                <td className="product-info">
                  <img src={DashboardProImage} alt="iPhone 11 Pro" />
                  <span>iPhone 11 Pro</span>
                </td>
                <td className="product-stock-keeping-unit">302012</td>
                <td>iPhone</td>
                <td>10</td>
                <td>₹59000</td>
                <td>
                  <span className="status low-stock">Low Stock</span>
                </td>
                <td>24 Jun 2023</td>
                <td className="actions">
                  <IoPencil />
                  <IoIosEye />
                  <MdDeleteForever />
                </td>
              </tr>
              <tr>
                <td className="product-info">
                  <img src={DashboardProImage} alt="iPhone 11 Pro" />
                  <span>iPhone 11 Pro</span>
                </td>
                <td className="product-stock-keeping-unit">302012</td>
                <td>iPhone</td>
                <td>10</td>
                <td>₹59000</td>
                <td>
                  <span className="status published">Published</span>
                </td>
                <td>24 Jun 2023</td>
                <td className="actions">
                  <IoPencil />
                  <IoIosEye />
                  <MdDeleteForever />
                </td>
              </tr>
              <tr>
                <td className="product-info">
                  <img src={DashboardProImage} alt="iPhone 11 Pro" />
                  <span>iPhone 11 Pro</span>
                </td>
                <td className="product-stock-keeping-unit">302012</td>
                <td>iPhone</td>
                <td>10</td>
                <td>₹59000</td>
                <td>
                  <span className="status draft">Draft</span>
                </td>
                <td>24 Jun 2023</td>
                <td className="actions">
                  <IoPencil />
                  <IoIosEye />
                  <MdDeleteForever />
                </td>
              </tr>
              <tr>
                <td className="product-info">
                  <img src={DashboardProImage} alt="iPhone 11 Pro" />
                  <span>iPhone 11 Pro</span>
                </td>
                <td className="product-stock-keeping-unit">302012</td>
                <td>iPhone</td>
                <td>10</td>
                <td>₹59000</td>
                <td>
                  <span className="status out-of-stock">Out of Stock</span>
                </td>
                <td>24 Jun 2023</td>
                <td className="actions">
                  <IoPencil />
                  <IoIosEye />
                  <MdDeleteForever />
                </td>
              </tr>
              <tr>
                <td className="product-info">
                  <img src={DashboardProImage} alt="iPhone 11 Pro" />
                  <span>iPhone 11 Pro</span>
                </td>
                <td className="product-stock-keeping-unit">302012</td>
                <td>iPhone</td>
                <td>10</td>
                <td>₹59000</td>
                <td>
                  <span className="status low-stock">Low Stock</span>
                </td>
                <td>24 Jun 2023</td>
                <td className="actions">
                  <IoPencil />
                  <IoIosEye />
                  <MdDeleteForever />
                </td>
              </tr>
              <tr>
                <td className="product-info">
                  <img src={DashboardProImage} alt="iPhone 11 Pro" />
                  <span>iPhone 11 Pro</span>
                </td>
                <td className="product-stock-keeping-unit">302012</td>
                <td>iPhone</td>
                <td>10</td>
                <td>₹59000</td>
                <td>
                  <span className="status low-stock">Low Stock</span>
                </td>
                <td>28 Jun 2023</td>
                <td className="actions">
                  <IoPencil />
                  <IoIosEye />
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

export default Product;
