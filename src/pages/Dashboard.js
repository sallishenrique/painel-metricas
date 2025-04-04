import React from 'react';
import Header from '../components/Header';
import MetricsCard from '../components/MetricsCard';

function Dashboard() {
  return (
    <>
      <Header />
      <div style={{ padding: '20px' }}>
        <h2>Métricas</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <MetricsCard title="Cadastros" value="120" />
          <MetricsCard title="Acessos" value="1.200" />
          <MetricsCard title="Taxa de Rolagem" value="80%" />
          <MetricsCard title="Tempo Médio" value="2m30s" />
          <MetricsCard title="UTM mais eficaz" value="utm_campaign=promo1" />
        </div>
      </div>
    </>
  );
}

export default Dashboard;

