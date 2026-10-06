import React, { useState } from 'react';
import './LiveCapture.css';

export default function LiveCapture() {
  const [isCapturing, setIsCapturing] = useState(false);
  const [activeBand, setActiveBand] = useState('2.4GHz');

  const networksData = [
    { ssid: 'Corp-Industrial-01', bssid: 'E4:8D:8C:1A:00:11', channel: 1, band: '2.4 GHz', rssi: '-45 dBm', isGood: true, security: 'WPA3', isOpen: false },
    { ssid: 'Red-Visitantes', bssid: 'E4:8D:8C:1A:00:12', channel: 6, band: '2.4 GHz', rssi: '-62 dBm', isGood: false, security: 'Abierta', isOpen: true },
    { ssid: 'IT-Infraestructura', bssid: '00:1A:2B:6F:C1:88', channel: 11, band: '2.4 GHz', rssi: '-52 dBm', isGood: true, security: 'WPA3', isOpen: false },
  ];

  return (
    <div className="live-capture-container">
      {/* Toolbar */}
      <div className="capture-toolbar">
        <div className="capture-actions">
          <button 
            onClick={() => setIsCapturing(true)}
            disabled={isCapturing}
            className="btn-start-capture"
          >
            <i className="bi bi-play-fill"></i>
            Iniciar captura
          </button>
          <button 
            onClick={() => setIsCapturing(false)}
            disabled={!isCapturing}
            className="btn-stop-capture"
          >
            <i className="bi bi-stop-fill"></i>
            Detener captura
          </button>
        </div>
        <div className="band-filter-group">
          <button 
            onClick={() => setActiveBand('2.4GHz')}
            className={`band-filter-btn ${activeBand === '2.4GHz' ? 'active' : ''}`}
          >
            2.4 GHz
          </button>
          <button 
            onClick={() => setActiveBand('5GHz')}
            className={`band-filter-btn ${activeBand === '5GHz' ? 'active' : ''}`}
          >
            5 GHz
          </button>
        </div>
      </div>

      {/* Alert */}
      <div className="capture-alert">
        <div className="alert-message-box">
          <span className="alert-indicator-dot"></span>
          <span className="alert-title">Interferencia detectada:</span>
          <span className="alert-desc">
            Canal 6 crítico (<span className="alert-highlight">alta saturación, 84% de ocupación</span>)
          </span>
        </div>
        <div className="alert-severity-badge">
          <span className="severity-dot"></span>
          <span className="severity-text">Severidad alta</span>
        </div>
      </div>

      {/* Spectrum Chart */}
      <div className="spectrum-chart-card">
        <div className="spectrum-chart-header">
          <span className="spectrum-chart-title">Espectro RSSI vs. canales</span>
          <div className="spectrum-legend">
            <div className="legend-item-inline">
              <span className="legend-marker-box teal"></span>
              <span className="legend-item-text">Corp-Industrial-01 (Ch 1)</span>
            </div>
            <div className="legend-item-inline">
              <span className="legend-marker-box red"></span>
              <span className="legend-item-text">Saturación Ch 6</span>
            </div>
            <div className="legend-item-inline">
              <span className="legend-marker-box teal"></span>
              <span className="legend-item-text">IT-Infraestructura (Ch 11)</span>
            </div>
          </div>
        </div>
        <div className="svg-spectrum-wrapper">
          <svg className="svg-spectrum-canvas" preserveAspectRatio="none" viewBox="0 0 1000 240">
            <line stroke="#E2E8F0" strokeWidth="1" x1="50" x2="980" y1="20" y2="20"></line>
            <line stroke="#E2E8F0" strokeWidth="1" x1="50" x2="980" y1="60" y2="60"></line>
            <line stroke="#E2E8F0" strokeWidth="1" x1="50" x2="980" y1="100" y2="100"></line>
            <line stroke="#E2E8F0" strokeWidth="1" x1="50" x2="980" y1="140" y2="140"></line>
            <line stroke="#E2E8F0" strokeWidth="1" x1="50" x2="980" y1="180" y2="180"></line>
            <line stroke="#E2E8F0" strokeWidth="1" x1="50" x2="980" y1="220" y2="220"></line>
            <text fill="#747686" x="10" y="24" fontSize="13" fontWeight="500">-30 dBm</text>
            <text fill="#747686" x="10" y="64" fontSize="13" fontWeight="500">-40 dBm</text>
            <text fill="#747686" x="10" y="104" fontSize="13" fontWeight="500">-50 dBm</text>
            <text fill="#747686" x="10" y="144" fontSize="13" fontWeight="500">-60 dBm</text>
            <text fill="#747686" x="10" y="184" fontSize="13" fontWeight="500">-70 dBm</text>
            <text fill="#747686" x="10" y="224" fontSize="13" fontWeight="500">-90 dBm</text>
            <path d="M 60 220 Q 130 65 200 220 Z" fill="#1B756F" fillOpacity="0.12" stroke="#1B756F" strokeWidth="2"></path>
            <path d="M 330 220 Q 450 115 570 220 Z" fill="#D93025" fillOpacity="0.12" stroke="#D93025" strokeWidth="2"></path>
            <path d="M 360 220 Q 450 135 540 220 Z" fill="#D93025" fillOpacity="0.08" stroke="#D93025" strokeDasharray="4" strokeWidth="1.5"></path>
            <path d="M 380 220 Q 450 170 520 220 Z" fill="#D93025" fillOpacity="0.06" stroke="#D93025" strokeWidth="1"></path>
            <path d="M 690 220 Q 770 90 850 220 Z" fill="#1B756F" fillOpacity="0.12" stroke="#1B756F" strokeWidth="2"></path>
            <line stroke="#E2E8F0" strokeWidth="1" x1="130" x2="130" y1="20" y2="220"></line>
            <line stroke="#E2E8F0" strokeWidth="1" x1="450" x2="450" y1="20" y2="220"></line>
            <line stroke="#E2E8F0" strokeWidth="1" x1="770" x2="770" y1="20" y2="220"></line>
            <text fill="#0F1B3D" x="120" y="236" fontSize="13" fontWeight="600">Ch 1</text>
            <text fill="#747686" x="195" y="236" fontSize="13" fontWeight="500">2</text>
            <text fill="#747686" x="260" y="236" fontSize="13" fontWeight="500">3</text>
            <text fill="#747686" x="325" y="236" fontSize="13" fontWeight="500">4</text>
            <text fill="#747686" x="390" y="236" fontSize="13" fontWeight="500">5</text>
            <text fill="#D93025" x="440" y="236" fontSize="13" fontWeight="600">Ch 6</text>
            <text fill="#747686" x="515" y="236" fontSize="13" fontWeight="500">7</text>
            <text fill="#747686" x="580" y="236" fontSize="13" fontWeight="500">8</text>
            <text fill="#747686" x="645" y="236" fontSize="13" fontWeight="500">9</text>
            <text fill="#747686" x="710" y="236" fontSize="13" fontWeight="500">10</text>
            <text fill="#0F1B3D" x="760" y="236" fontSize="13" fontWeight="600">Ch 11</text>
            <text fill="#747686" x="835" y="236" fontSize="13" fontWeight="500">12</text>
            <text fill="#747686" x="900" y="236" fontSize="13" fontWeight="500">13</text>
          </svg>
        </div>
      </div>

      {/* Networks Table */}
      <div className="networks-table-card">
        <div className="networks-table-header">
          <span className="networks-header-title">Redes detectadas ({networksData.length})</span>
          <span className="networks-header-filter">Filtro activo: {activeBand}</span>
        </div>
        <div className="networks-table-wrapper">
          <table className="networks-table">
            <thead className="networks-thead">
              <tr>
                <th className="networks-th">SSID</th>
                <th className="networks-th">BSSID</th>
                <th className="networks-th">Canal</th>
                <th className="networks-th">Banda</th>
                <th className="networks-th">RSSI (dBm)</th>
                <th className="networks-th">Cifrado</th>
              </tr>
            </thead>
            <tbody>
              {networksData.map((item, index) => (
                <tr key={index} className="networks-tr">
                  <td className="networks-td ssid">{item.ssid}</td>
                  <td className="networks-td secondary">{item.bssid}</td>
                  <td className="networks-td channel">{item.channel}</td>
                  <td className="networks-td secondary">{item.band}</td>
                  <td className={`networks-td ${item.isGood ? 'rssi-good' : 'rssi-mid'}`}>
                    {item.rssi}
                  </td>
                  <td className="networks-td">
                    {item.isOpen ? (
                      <div className="auth-badge-open">
                        <span className="auth-dot-open"></span>
                        <span className="auth-text-open">Abierta</span>
                      </div>
                    ) : (
                      <span className="networks-td channel">{item.security}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
