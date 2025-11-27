import React, { useState } from "react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";
import DeleteModal from "../layout/DeleteModal";
import { IoIosEye } from "react-icons/io";
import AdminProfile from "../../../assets/image/dash-profile.png";
import { MdDeleteForever } from "react-icons/md";
import { IoPencil } from "react-icons/io5";
import Breadcrumb from "../layout/Breadcrumb";

const Customer = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const openDeleteModal = () => setIsDeleteModalOpen(true);
  const closeDeleteModal = () => setIsDeleteModalOpen(false);

  const handleCustomerDelete = () => {
    console.log("Customer deleted successfully!");
    closeDeleteModal();
  };
  return (
    <>
      <Navbar />
      <Sidebar />
      <main className="admin-panel-header-div">
        <Breadcrumb
          title="Customers"
          breadcrumbText="Customers List"
          button={{ link: "/admin/add-new_customer", text: "Add New Customer" }}
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
                     ${activeTab === "Blocked" ? "active" : ""}`}
            onClick={() => setActiveTab("Blocked")}
          >
            Blocked
          </button>
        </div>

        <div className="dashboard-table-container">
          <table>
            <thead>
              <tr>
                <th style={{ width: "25%" }}>Name</th>
                <th style={{ width: "16%" }}>Email</th>
                <th style={{ width: "15%" }}>Phone No</th>
                <th style={{ width: "11%" }}>DOB</th>
                <th style={{ width: "10%" }}>Status</th>
                <th style={{ width: "11%" }}>Added</th>
                <th style={{ width: "12%" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="product-info admin-profile">
                  <img src={AdminProfile} alt="profile_image" />
                  <span>John Doe</span>
                </td>
                <td>johndoe@gmail.com</td>
                <td>+917034983827</td>
                <td>24 Aug 1998</td>
                <td>
                  <span className="status published">Active</span>
                </td>
                <td>24 Jun 2023</td>
                <td className="actions">
                  <IoPencil />
                  <IoIosEye />
                  <MdDeleteForever onClick={openDeleteModal} />
                </td>
              </tr>
              <tr>
                <td className="product-info">
                  <img src={AdminProfile} alt="profile_image" />
                  <span>John Doe</span>
                </td>
                <td>johndoe@gmail.com</td>
                <td>+917034983827</td>
                <td>24 Aug 1998</td>
                <td>
                  <span className="status published">Active</span>
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
                  <img src={AdminProfile} alt="profile_image" />
                  <span>John Doe</span>
                </td>
                <td>johndoe@gmail.com</td>
                <td>+917034983827</td>
                <td>24 Aug 1998</td>
                <td>
                  <span className="status out-of-stock">Blocked</span>
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
                  <img src={AdminProfile} alt="profile_image" />
                  <span>John Doe</span>
                </td>
                <td>johndoe@gmail.com</td>
                <td>+917034983827</td>
                <td>24 Aug 1998</td>
                <td>
                  <span className="status published">Active</span>
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
                  <img src={AdminProfile} alt="profile_image" />
                  <span>John Doe</span>
                </td>
                <td>johndoe@gmail.com</td>
                <td>+917034983827</td>
                <td>24 Aug 1998</td>
                <td>
                  <span className="status published">Active</span>
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
                  <img src={AdminProfile} alt="profile_image" />
                  <span>John Doe</span>
                </td>
                <td>johndoe@gmail.com</td>
                <td>+917034983827</td>
                <td>24 Aug 1998</td>
                <td>
                  <span className="status published">Active</span>
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
                  <img src={AdminProfile} alt="profile_image" />
                  <span>John Doe</span>
                </td>
                <td>johndoe@gmail.com</td>
                <td>+917034983827</td>
                <td>24 Aug 1998</td>
                <td>
                  <span className="status out-of-stock">Blocked</span>
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
                  <img src={AdminProfile} alt="profile_image" />
                  <span>John Doe</span>
                </td>
                <td>johndoe@gmail.com</td>
                <td>+917034983827</td>
                <td>24 Aug 1998</td>
                <td>
                  <span className="status published">Active</span>
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
                  <img src={AdminProfile} alt="profile_image" />
                  <span>John Doe</span>
                </td>
                <td>johndoe@gmail.com</td>
                <td>+917034983827</td>
                <td>24 Aug 1998</td>
                <td>
                  <span className="status published">Active</span>
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
                  <img src={AdminProfile} alt="profile_image" />
                  <span>John Doe</span>
                </td>
                <td>johndoe@gmail.com</td>
                <td>+917034983827</td>
                <td>24 Aug 1998</td>
                <td>
                  <span className="status published">Active</span>
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
                  <img src={AdminProfile} alt="profile_image" />
                  <span>John Doe</span>
                </td>
                <td>johndoe@gmail.com</td>
                <td>+917034983827</td>
                <td>24 Aug 1998</td>
                <td>
                  <span className="status out-of-stock">Blocked</span>
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
                  <img src={AdminProfile} alt="profile_image" />
                  <span>John Doe</span>
                </td>
                <td>johndoe@gmail.com</td>
                <td>+917034983827</td>
                <td>24 Aug 1998</td>
                <td>
                  <span className="status published">Active</span>
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
                  <img src={AdminProfile} alt="profile_image" />
                  <span>John Doe</span>
                </td>
                <td>johndoe@gmail.com</td>
                <td>+917034983827</td>
                <td>24 Aug 1998</td>
                <td>
                  <span className="status published">Active</span>
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
      {isDeleteModalOpen && (
        <DeleteModal
          title="Customer"
          onCancel={closeDeleteModal}
          onDelete={handleCustomerDelete}
        />
      )}
    </>
  );
};

export default Customer;
