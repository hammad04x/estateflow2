import React, { useRef, useState, useEffect } from "react";
import Sidebar from "../layout/Sidebar";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { FiMenu } from "react-icons/fi"; // Same icon as navbar
import { MdSave } from "react-icons/md";
import { Link, useNavigate, useParams } from "react-router-dom";
import api from "../../../api/axiosInstance";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../../assets/css/admin/common/form.css";

const EditProperty = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const fileRef = useRef(null);

  const [form, setForm] = useState({
    title: "",
    description: "",
    address: "",
    price: "",
    status: "available",
    image: null,
    existingImage: null,
  });
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);

  // Load property data
  useEffect(() => {
    if (!id) return;

    (async () => {
      try {
        setFetching(true);
        const res = await api.get(`/getproperties/${id}`);
        const data = res.data;

        setForm({
          title: data.title || "",
          description: data.description || "",
          address: data.address || "",
          price: data.price || "",
          status: data.status || "available",
          image: null,
          existingImage: data.image || null,
        });
      } catch (err) {
        console.error("Fetch error:", err);
        toast.error("Failed to load property");
      } finally {
        setFetching(false);
      }
    })();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleFile = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    setForm((p) => ({ ...p, image: f }));
  };

  const isValid = () => form.title.trim() && form.price && form.address.trim();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid()) return toast.warn("Please fill required fields");

    setLoading(true);
    try {
      const fd = new FormData();
      fd.append("title", form.title);
      fd.append("description", form.description);
      fd.append("address", form.address);
      fd.append("price", form.price);
      fd.append("status", form.status);
      if (form.image) fd.append("image", form.image);

      await api.put(`/updateproperty/${id}`, fd);
      toast.success("Property updated successfully");
      setTimeout(() => navigate("/admin/properties"), 800);
    } catch (err) {
      const message = err?.response?.data?.error || "Failed to update property";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  // Toggle sidebar (same function as navbar)
  const handleHamburgerClick = () => {
    if (window.toggleAdminSidebar) {
      window.toggleAdminSidebar();
    }
  };

  if (fetching) {
    return (
      <>
        <Sidebar />
        <main className="admin-panel-header-div no-navbar">
          <div style={{ padding: "60px 20px", textAlign: "center", color: "#666", fontSize: "16px" }}>
            Loading property...
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Sidebar />

      <main className="admin-panel-header-div no-navbar">
        {/* Header: Back Arrow + Title + Hamburger (mobile only) */}
        <div className="add-form-header">
          <Link to="/admin/properties" className="back-arrow-btn">
            <HiOutlineArrowLeft />
          </Link>
          <h5>Edit Property</h5>

          {/* Hamburger Icon – Mobile Only */}
          <button
            className="form-hamburger-btn"
            onClick={handleHamburgerClick}
            aria-label="Toggle sidebar"
          >
            <FiMenu />
          </button>
        </div>

        {/* Form Content */}
        <div className="form-content-after-header">
          <div className="desktop-save-wrapper">
                <button
                  className="desktop-save-btn"
                  onClick={handleSubmit}
                  disabled={!isValid() || loading}
                >
                  <MdSave />
                  {loading ? "Saving..." : "Save Changes"}
                </button>
              </div>
          <form onSubmit={handleSubmit} className="form-layout">
            {/* Left Column */}
            <div>
              <div className="form-card">
                <h6>General Information</h6>
                <div className="form-group">
                  <label>Property Title *</label>
                  <input
                    type="text"
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    placeholder="Type property title here..."
                  />
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    placeholder="Type property description here..."
                  />
                </div>
                <div className="form-group">
                  <label>Address *</label>
                  <input
                    type="text"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    placeholder="Type property address..."
                  />
                </div>
              </div>

              <div className="form-card">
                <h6>Media</h6>
                <div
                  className="upload-box"
                  onClick={() => fileRef.current?.click()}
                >
                  {form.existingImage && !form.image ? (
                    <div style={{ marginBottom: 12 }}>
                      <img
                        src={form.existingImage}
                        alt="Current property"
                        style={{
                          width: "100%",
                          maxWidth: 300,
                          height: 180,
                          objectFit: "cover",
                          borderRadius: 12,
                          margin: "0 auto",
                          display: "block",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                        }}
                      />
                      <p style={{ margin: "14px 0 0", fontSize: 13, color: "#555", textAlign: "center" }}>
                        Click to replace image
                      </p>
                    </div>
                  ) : form.image ? (
                    <p style={{ color: "#f6a623", fontWeight: 600, fontSize: 14 }}>
                      New image selected
                    </p>
                  ) : (
                    <>
                      <div className="upload-icon">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/1829/1829586.png"
                          alt="upload"
                        />
                      </div>
                      <p className="upload-text">Add Thumbnail Image</p>
                    </>
                  )}
                  <input
                    ref={fileRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFile}
                    style={{ display: "none" }}
                  />
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div>
              <div className="form-card">
                <h6>Pricing & Status</h6>
                <div className="form-group">
                  <label>Base Price *</label>
                  <input
                    type="number"
                    name="price"
                    value={form.price}
                    onChange={handleChange}
                    placeholder="Type base price here..."
                  />
                </div>
                <div className="form-group">
                  <label>Status</label>
                  <select name="status" value={form.status} onChange={handleChange}>
                    <option value="available">Available</option>
                    <option value="reserved">Reserved</option>
                    <option value="sold">Sold</option>
                  </select>
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* Mobile Sticky Save Button */}
        <div className="sticky-bottom-save">
          <button onClick={handleSubmit} disabled={!isValid() || loading}>
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </main>

      <ToastContainer position="top-right" autoClose={2500} theme="colored" />
    </>
  );
};

export default EditProperty;