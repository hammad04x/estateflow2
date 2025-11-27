import React from "react";
import Sidebar from "../layout/Sidebar";
import Navbar from "../layout/Navbar";
import { IoMdArrowDropright } from "react-icons/io";
import { MdSave } from "react-icons/md";
import { HiXMark } from "react-icons/hi2";
import { Link, NavLink } from "react-router-dom";

const AddProduct = () => {
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
            <h5>Add Product</h5>
            <div className="admin-panel-breadcrumb">
              <Link to="/admin/dashboard" className="breadcrumb-link active">
                Dashboard
              </Link>
              <IoMdArrowDropright />
              <Link to="/admin/product" className="breadcrumb-link active">
                Product List
              </Link>
              <IoMdArrowDropright />
              <span className="breadcrumb-text">Add Product</span>
            </div>
          </div>
          <div className="admin-panel-header-add-buttons">
            <NavLink
              to="/admin/product"
              className="cancel-btn dashboard-add-product-btn"
            >
              <HiXMark /> Cancel
            </NavLink>
            <button className="primary-btn dashboard-add-product-btn">
              <MdSave /> Save Product
            </button>
          </div>
        </div>

        <div className="dashboard-add-content-card-div">
          <div className="dashboard-add-content-left-side">
            <div className="dashboard-add-content-card">
              <h6>General Information</h6>
              <div className="add-product-form-container">
                <label htmlFor="label-for-input-textarea product-name">
                  Product Name
                </label>
                <input
                  type="text"
                  id="product-name"
                  placeholder="Type product name here..."
                />
                <label htmlFor="label-for-input-textarea description">
                  Description
                </label>
                <textarea
                  id="description"
                  placeholder="Type product description here..."
                ></textarea>
              </div>
            </div>

            <div className="dashboard-add-content-card">
              <h6>Media</h6>
              <div className="add-product-form-container">
                <label htmlFor="label-for-input-textarea photo">Photo</label>
                <div className="add-product-upload-container">
                  <div className="add-product-upload-icon">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/1829/1829586.png"
                      alt="Upload Icon"
                    />
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
              <h6>Pricing</h6>
              <div className="add-product-form-container">
                <label htmlFor="label-for-input-textarea product-name">
                  Base Price
                </label>
                <input
                  type="text"
                  id="product-name"
                  placeholder="Type base price here..."
                />
                <label htmlFor="label-for-input-textarea product-name">
                  Discount Percentage (%)
                </label>
                <input
                  type="text"
                  id="product-name"
                  placeholder="Type discount percentage..."
                />
                <label htmlFor="label-for-input-textarea product-name">
                  Stock Keeping Unit
                </label>
                <input
                  type="text"
                  id="product-name"
                  placeholder="Type Stock keeping unit here..."
                />
              </div>
            </div>
          </div>

          <div className="dashboard-add-content-right-side">
            <div className="dashboard-add-content-card">
              <h6>Brand & Category</h6>
              <div className="add-product-form-container">
                <label htmlFor="label-for-input-textarea product-name">
                  Select Brand
                </label>
                <select id="courses" name="courses">
                  <option value="dell">Dell</option>
                  <option value="hp">HP</option>
                  <option value="apple">Apple</option>
                  <option value="asus">Asus</option>
                </select>
              </div>
              <div className="add-product-form-container">
                <label htmlFor="label-for-input-textarea product-name">
                  Select Category
                </label>
                <select id="courses" name="courses">
                  <option value="mouse">Mouse</option>
                  <option value="monitor">Monitor</option>
                  <option value="keyboard">Keyboard</option>
                  <option value="laptop">Laptop</option>
                </select>
              </div>
            </div>

            <div className="dashboard-add-content-card">
              <h6>Status</h6>
              <div className="add-product-form-container">
                <label htmlFor="label-for-input-textarea product-name">
                  Product Status
                </label>
                <select id="courses" name="courses">
                  <option value="published">Published</option>
                  <option value="low_stock">Low Stock</option>
                  <option value="draft">Draft</option>
                  <option value="out_of_stock">Out of Stock</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AddProduct;
