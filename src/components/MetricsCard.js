import React from 'react';
import './MetricsCard.css';

function MetricsCard({ title, value }) {
  return (
    <div className="metric-card">
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
}

export default MetricsCard;

