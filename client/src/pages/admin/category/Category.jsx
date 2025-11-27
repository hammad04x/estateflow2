import React from "react";
import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";
import { MdDeleteForever } from "react-icons/md";
import DashboardProImage from "../../../assets/image/dashboard_product_img.png";
import { IoPencil } from "react-icons/io5";
import {
  HiOutlineArrowLeft,
  HiOutlineArrowRight,
} from "react-icons/hi";
import { IoIosEye } from "react-icons/io";
import Breadcrumb from "../layout/Breadcrumb";
import "../../../assets/css/main.css"

const Category = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <main className="admin-panel-header-div">
        <Breadcrumb
          title="Categories"
          breadcrumbText="Categories"
          button={{ link: "/admin/add-category", text: "Add Category" }}
        />

        <div className="dashboard-table-container full-height">
          <table>
            <thead>
              <tr>
                <th style={{ width: "52%" }}>Category Name</th>
                <th style={{ width: "12%" }}>Sold</th>
                <th style={{ width: "12%" }}>Stock</th>
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
                <td>10</td>
                <td>2499</td>
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
                <td>10</td>
                <td>2499</td>
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
                <td>10</td>
                <td>2499</td>
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
                <td>10</td>
                <td>2499</td>
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
                <td>10</td>
                <td>2499</td>
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
                <td>10</td>
                <td>2499</td>
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
                <td>10</td>
                <td>2499</td>
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
                <td>10</td>
                <td>2499</td>
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
                <td>10</td>
                <td>2499</td>
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
                <td>10</td>
                <td>2499</td>
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
                <td>10</td>
                <td>2499</td>
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
                <td>10</td>
                <td>2499</td>
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
                <td>10</td>
                <td>2499</td>
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

export default Category;
