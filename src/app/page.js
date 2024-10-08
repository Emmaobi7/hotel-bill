
'use client';


import React from 'react';

const DashboardLanding = () => {
  return (
    <div className="main-content">
      {/* Dashboard Overview */}
      <section className="dashboard-overview">
        <div className="overview-cards">
          <div className="card">
            <h3>Total Bookings</h3>
            <p>1,245</p>
          </div>
          <div className="card">
            <h3>Revenue</h3>
            <p>₦32,650,000</p> {/* Using local currency as an example */}
          </div>
          <div className="card">
            <h3>New Customers</h3>
            <p>356</p>
          </div>
          <div className="card">
            <h3>Occupancy Rate</h3>
            <p>85%</p>
          </div>
        </div>

        <div className="charts-section">
          <div className="chart">
            <h3>Revenue Growth</h3>
            <div className="chart-placeholder">[Chart Placeholder]</div>
          </div>
          <div className="chart">
            <h3>Bookings by Month</h3>
            <div className="chart-placeholder">[Chart Placeholder]</div>
          </div>
        </div>

        <div className="recent-activity">
          <h3>Recent Activity</h3>
          <ul>
            <li>John Doe booked a room - 5 mins ago</li>
            <li>Payment received from Jane Smith - 15 mins ago</li>
            <li>Room service requested by Adam Black - 1 hour ago</li>
            <li>Guest checkout - 2 hours ago</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default DashboardLanding;
