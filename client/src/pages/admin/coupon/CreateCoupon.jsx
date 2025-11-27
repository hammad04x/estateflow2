import React from "react";
import Sidebar from "../layout/Sidebar";
import Navbar from "../layout/Navbar";
import { IoMdArrowDropright } from "react-icons/io";
import { MdSave } from "react-icons/md";
import { HiXMark } from "react-icons/hi2";
import { Link, NavLink } from "react-router-dom";

const CreateCoupon = () => {
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
            <h5>Add Coupon</h5>
            <div className="admin-panel-breadcrumb">
              <Link to="/admin/dashboard" className="breadcrumb-link active">
                Dashboard
              </Link>
              <IoMdArrowDropright />
              <Link to="/admin/coupon" className="breadcrumb-link active">
                Coupon List
              </Link>
              <IoMdArrowDropright />
              <span className="breadcrumb-text">Add Coupon</span>
            </div>
          </div>
          <div className="admin-panel-header-add-buttons">
            <NavLink
              to="/admin/coupon"
              className="cancel-btn dashboard-add-product-btn"
            >
              <HiXMark /> Cancel
            </NavLink>
            <button className="primary-btn dashboard-add-product-btn">
              <MdSave /> Save Coupon
            </button>
          </div>
        </div>
        <div className="dashboard-add-content-card-div">
          <div className="dashboard-add-content-left-side">
            <div className="dashboard-add-content-card">
              <h6>General Information</h6>
              <div className="add-product-form-container">
                <label htmlFor="label-for-input-textarea product-name">
                  Coupon Code
                </label>
                <input
                  type="text"
                  id="coupon-code"
                  placeholder="Type coupon code here..."
                />
                <div className="coupon-code-input-max-min-price">
                  <div>
                    <label htmlFor="label-for-input-textarea product-name">
                      Discount Percentage (%)
                    </label>
                    <input
                      type="text"
                      id="discount"
                      placeholder="Type product discount here..."
                    />
                  </div>
                  <div>
                    <label htmlFor="label-for-input-textarea product-name">
                      Maximum Price
                    </label>
                    <input
                      type="text"
                      id="maximum-price"
                      placeholder="Type products max price here..."
                    />
                  </div>
                  <div>
                    <label htmlFor="label-for-input-textarea product-name">
                      Minimum Price
                    </label>
                    <input
                      type="text"
                      id="minimum-price"
                      placeholder="Type products min price here..."
                    />
                  </div>
                  </div>
                  <div className="coupon-code-start-expity-date">
                    <div>
                      <label htmlFor="label-for-input-textarea product-name">
                        Start Date
                      </label>
                      <input type="date" id="coupon-code-start-date" />
                    </div>
                    <div>
                      <label htmlFor="label-for-input-textarea product-name">
                        Expiry Date
                      </label>
                      <input type="date" id="coupon-code-expiry-date" />
                    </div>
                </div>
              </div>
            </div>
          </div>

          <div className="dashboard-add-content-right-side">
            <div className="dashboard-add-content-card">
              <h6>Status</h6>
              <div className="add-product-form-container">
                <label htmlFor="label-for-input-textarea product-name">
                  Coupon Code Status
                </label>
                <select id="courses" name="courses">
                  <option value="active">Active</option>
                  <option value="disable">Disable</option>
                  <option value="expired">Expired</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CreateCoupon;
