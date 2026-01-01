import React, { useEffect, useState } from "react";
import ExpandableCard from "../../../components/cards/ExpandableCard";
import api from "../../../api/axiosInstance";
import { Calendar, Plus, X } from "lucide-react";
import Sidebar from "../layout/Sidebar";
import { FiMenu } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { useActiveUser } from "../../../context/ActiveUserContext";

const BuyList = () => {
  const [buys, setBuys] = useState([]);
  const [loading, setLoading] = useState(true);
  const [client, setClient] = useState({});

  const { userId } = useActiveUser();
  const navigate = useNavigate();

  // fetch user
  useEffect(() => {
    if (!userId) return;

    api.get(`/users/${userId}`)
      .then(res => setClient(res.data))
      .catch(console.error);
  }, [userId]);

  // fetch buys ONLY when userId exists
  useEffect(() => {
    if (!userId) return;
    fetchBuys();
  }, [userId]);

  const fetchBuys = async () => {
    try {
      setLoading(true);
      const res = await api.get(`/getbuypropertiesbyuserid/${userId}`);
      setBuys(res.data || []);
    } catch (err) {
      console.error("Failed to fetch buys", err);
    } finally {
      setLoading(false);
    }
  };

  const handleNavigateToBuyForm = () => {
    navigate("/admin/buycard/buysell", { state: { client } });
  };

  return (
    <>
      <Sidebar />

      <div className="admin-panel-header-div no-navbar">
        {/* HEADER */}
        <div className="add-form-header">
          <Link to="/admin/user-dashboard" className="back-arrow-btn">
            <HiOutlineArrowLeft />
          </Link>

          <h5>{client?.name}</h5>

          <button
            className="form-hamburger-btn"
            onClick={() =>
              window.toggleAdminSidebar && window.toggleAdminSidebar()
            }
          >
            <FiMenu />
          </button>
        </div>

        {/* PAGE CONTENT */}
        <div className="sales-page-container">
          {loading ? (
            <div className="sales-loading">
              Loading...
            </div>
          ) : (
            <>
              <div className="sales-card-header sales-header">
                <h2 className="sales-title">Purchases</h2>
                <button
                  className="primary-btn add-sell-button"
                  onClick={handleNavigateToBuyForm}
                >
                  <Plus size={16} />
                  Add Buy
                </button>
              </div>

              <div className="sales-divider" />

              {buys.length === 0 ? (
                <p className="empty-state">No purchases found.</p>
              ) : (
                buys.map((item, index) => (
                  <ExpandableCard
                    key={item.id || index}
                    headerLeft={
                      <>
                        <div className="booking-id">#{index + 1}</div>
                        <div className="complex-name">{item.title}</div>
                      </>
                    }
                  >
                    <div className="booking-date">
                      <Calendar size={16} />
                      <span>
                        {new Date(item.created_at).toLocaleDateString()}
                      </span>
                    </div>

                    <div className="booking-amount-section">
                      <div className="booking-amount">
                        Amount:
                        <span className="amount-value">
                          ₹{item.amount}
                        </span>
                      </div>
                    </div>

                    <button className="cancel-booking-btn">
                      <X size={18} />
                      Cancel Purchase
                    </button>
                  </ExpandableCard>
                ))
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default BuyList;
