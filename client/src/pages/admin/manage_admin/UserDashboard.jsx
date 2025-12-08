import React from 'react';
import { ShoppingCart, TrendingUp, Package, Briefcase } from 'lucide-react';
import '../../../assets/css/admin/pages/userDashboard.css';
import Navbar from '../layout/Navbar';
import Sidebar from '../layout/Sidebar';
import purchaseSide from "../../../assets/image/purchaseSide.png";
import saleSide from "../../../assets/image/saleSide.png";
import inventorySide from "../../../assets/image/inventorySide.png";

function UserDashboard() {
    return (
        <>
            <Sidebar />
            <Navbar />

            <div className="view-admin-container admin-panel-header-div">
                <div className="dashboard-cards-grid">

                    {/* Your Purchase Card */}
                    <div className="dashboard-info-card dashboard-info-card-purchase" >
                        <div className="card-content-wrapper">
                            <div className="card-text-section">
                                <h6>Your Purchase</h6>
                                <p>You can save your ride booking View, Confirm or Cancel Bookings.</p>
                                <button className="card-action-btn">VIEW BOOKINGS</button>
                            </div>
                            <div className="card-icon-section" >
                                <div className="icon-wrapper" >
                                    <img src={purchaseSide} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sales Card */}
                    <div className="dashboard-info-card dashboard-info-card-sale">
                        <div className="card-content-wrapper">
                            <div className="card-text-section">
                                <h6>Sales</h6>
                                <p>You can see your Account or you can edit the profile if you want.</p>
                                <button className="card-action-btn">VIEW DETAILS</button>
                            </div>
                            <div className="card-icon-section" >
                                <div className="icon-wrapper" >
                                    <img src={saleSide} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Inventory Card */}
                    <div className="dashboard-info-card dashboard-info-card-inventory">
                        <div className="card-content-wrapper">
                            <div className="card-text-section">
                                <h6>Inventory</h6>
                                <p>You can Check Reviews You have Submitted.</p>
                                <button className="card-action-btn">READ REVIEWS</button>
                            </div>
                            <div className="card-icon-section" >
                                <div className="icon-wrapper" >
                                    <img src={inventorySide} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Broker Card */}
                    <div className="dashboard-info-card dashboard-info-card-broker">
                        <div className="card-content-wrapper">
                            <div className="card-text-section">
                                <h6>Broker</h6>
                                <p>You can see your Account or you can edit the profile if you want.</p>
                                <button className="card-action-btn">VIEW DETAILS</button>
                            </div>
                            <div className="card-icon-section" >
                                <div className="icon-wrapper" >
                                       <img src={saleSide} />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default UserDashboard;