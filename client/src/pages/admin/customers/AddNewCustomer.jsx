import React from "react";
import Sidebar from "../layout/Sidebar";
import Navbar from "../layout/Navbar";
import { MdSave } from "react-icons/md";
import { HiXMark } from "react-icons/hi2";
import { IoMdArrowDropright } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";

const AddNewCustomer = () => {
  const handleButtonClick = () => {
    document.getElementById("imageInputFile").click();
  };
  return (
    <>
      <Sidebar />
      <Navbar />
      <main className="admin-panel-header-div">
        <div
          className="admin-dashboard-main-header"
          style={{ marginBottom: "24px" }}
        >
          <div>
            <h5>Add Customer</h5>
            <div className="admin-panel-breadcrumb">
              <Link to="/admin/dashboard" className="breadcrumb-link active">
                Dashboard
              </Link>
              <IoMdArrowDropright />
              <Link to="/admin/customers" className="breadcrumb-link active">
                Customer List
              </Link>
              <IoMdArrowDropright />
              <span className="breadcrumb-text">Add Customer</span>
            </div>
          </div>
          <div className="admin-panel-header-add-buttons">
            <NavLink
              to="/admin/customers"
              className="cancel-btn dashboard-add-product-btn"
            >
              <HiXMark /> Cancel
            </NavLink>
            <button className="primary-btn dashboard-add-product-btn">
              <MdSave /> Save Customer
            </button>
          </div>
        </div>
        <div className="dashboard-add-content-card-div">
          <div className="dashboard-add-content-left-side">
            <div className="dashboard-add-content-card">
              <h6>General Information</h6>
              <div className="add-product-form-container">
                <div className="coupon-code-input-profile">
                  <div>
                    <label htmlFor="label-for-input-textarea first-name">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      placeholder="Type your first name here..."
                    />
                  </div>
                  <div>
                    <label htmlFor="label-for-input-textarea middle-name">
                      Middle Name
                    </label>
                    <input
                      type="text"
                      id="middle-name"
                      placeholder="Type your middle name here..."
                    />
                  </div>
                  <div>
                    <label htmlFor="label-for-input-textarea last-name">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      placeholder="Type your last name here..."
                    />
                  </div>
                </div>
                <div className="coupon-code-input-profile">
                  <div>
                    <label htmlFor="label-for-input-textarea date-of-birth">
                      DOB
                    </label>
                    <input
                      type="date"
                      id="date-of-birth"
                      placeholder="Type your last name here..."
                    />
                  </div>
                  <div>
                    <label htmlFor="label-for-input-textarea email">
                      Email
                    </label>
                    <input
                      type="text"
                      id="email"
                      placeholder="Type your email here..."
                    />
                  </div>
                  <div>
                    <label htmlFor="label-for-input-textarea phone-number">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      id="phone-number"
                      placeholder="Type your phone number here..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="dashboard-add-content-right-side">
            <div className="dashboard-add-content-card">
              <h6>Profile</h6>
              <div className="add-product-form-container">
                <label htmlFor="label-for-input-textarea photo">Photo</label>
                <div className="add-product-upload-container">
                  <div className="add-product-upload-icon">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/1829/1829586.png"
                      alt="Upload Icon"
                    />
                  </div>
                  <p className="add-product-upload-text">
                    Drag and drop image here, or click add image
                  </p>
                  <button
                    type="button"
                    className="add-product-upload-btn secondary-btn"
                    onClick={handleButtonClick}
                  >
                    Add Image
                  </button>
                  <input
                    type="file"
                    id="imageInputFile"
                    name="profile"
                    style={{ display: "none" }}
                  />
                </div>
              </div>
            </div>
            <div className="dashboard-add-content-card">
              <h6>Status</h6>
              <div className="add-product-form-container">
                <label htmlFor="label-for-input-textarea product-name">
                  Customer Status
                </label>
                <select id="courses" name="courses">
                  <option value="active">Active</option>
                  <option value="blocked">Blocked</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AddNewCustomer;
