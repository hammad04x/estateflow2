import React, { useEffect, useState, useMemo } from "react";
import ExpandableCard from "../../../components/cards/ExpandableCard";
import api from "../../../api/axiosInstance";
import { Calendar, Plus, X } from "lucide-react";
import Sidebar from "../layout/Sidebar";
import { FiMenu } from "react-icons/fi";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { useActiveUser } from "../../../context/ActiveUserContext";

const TradeList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [client, setClient] = useState({});
  console.log(client)

  const { userId } = useActiveUser();
  const navigate = useNavigate();
  const location = useLocation();

  // detect mode from path
  const mode = useMemo(() => {
    if (location.pathname.includes("buycard")) return "buy";
    if (location.pathname.includes("salescard")) return "sell";
    return null;
  }, [location.pathname]);

  if (!mode) {
    throw new Error("Invalid route: expected buycard or salescard");
  }

  const config = {
    buy: {
      title: "Purchases",
      api: `/getbuypropertiesbyuserid/${userId}`,
      addText: "Add Buy",
      cancelText: "Cancel Purchase",
      navigateTo: "/admin/buycard/buysell",
    },
    sell: {
      title: "Sales",
      api: `/getsellpropertiesbyuserid/${userId}`,
      addText: "Add Sell",
      cancelText: "Cancel Sales",
      navigateTo: "/admin/salescard/addsell",
    },
  }[mode];

  // fetch user
  useEffect(() => {
    if (!userId) return;

    api
      .get(`/users/${userId}`)
      .then(res => setClient(res.data))
      .catch(console.error);
  }, [userId]);

  // fetch data
  useEffect(() => {
    if (!userId) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await api.get(config.api);
        setData(res.data || []);
      } catch (err) {
        console.error("Fetch failed", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId, config.api]);

  const handleAdd = () => {
    navigate(config.navigateTo, { state: { client } });
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

        {/* CONTENT */}
        <div className="sales-page-container">
          {loading ? (
            <div className="sales-loading">Loading...</div>
          ) : (
            <>
              <div className="sales-card-header sales-header">
                <h2 className="sales-title">{config.title}</h2>
                <button
                  className="primary-btn add-sell-button"
                  onClick={handleAdd}
                >
                  <Plus size={16} />
                  {config.addText}
                </button>
              </div>

              <div className="sales-divider" />

              {data.length === 0 ? (
                <p className="empty-state">No records found.</p>
              ) : (
                data.map((item, index) => (
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
                      {config.cancelText}
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

export default TradeList;
