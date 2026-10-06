import React, { useState } from 'react';
import './ChannelAnalysis.css';

export default function ChannelAnalysis() {
  const [selectedBand, setSelectedBand] = useState('2.4GHz');

  // Datos de canales para el heatmap
  const channelsHeatmap = [
    { channel: 'Ch 1', freq: '2412', occupancy: '15%', label: 'Muy baja', bg: '#B5FFFF', border: '#8AE0DB', textDark: true, highlight: true },
    { channel: 'Ch 2', freq: '2417', occupancy: '32%', label: 'Baja', bg: '#8AE0DB', textDark: true },
    { channel: 'Ch 3', freq: '2422', occupancy: '41%', label: 'Moderada', bg: '#5DC1B9', textDark: false },
    { channel: 'Ch 4', freq: '2427', occupancy: '63%', label: 'Media', bg: '#42A8A1', textDark: false },
    { channel: 'Ch 5', freq: '2432', occupancy: '74%', label: 'Alta', bg: '#42A8A1', textDark: false },
    { channel: 'Ch 6', freq: '2437', occupancy: '84%', label: 'Saturado', bg: '#D93025', textDark: false, isSaturated: true },
    { channel: 'Ch 7', freq: '2442', occupancy: '71%', label: 'Alta', bg: '#42A8A1', textDark: false },
    { channel: 'Ch 8', freq: '2447', occupancy: '47%', label: 'Moderada', bg: '#5DC1B9', textDark: false },
    { channel: 'Ch 9', freq: '2452', occupancy: '36%', label: 'Baja', bg: '#8AE0DB', textDark: true },
    { channel: 'Ch 10', freq: '2457', occupancy: '22%', label: 'Baja', bg: '#8AE0DB', textDark: true },
    { channel: 'Ch 11', freq: '2462', occupancy: '12%', label: 'Muy baja', bg: '#B5FFFF', border: '#8AE0DB', textDark: true, highlight: true },
    { channel: 'Ch 12', freq: '2467', occupancy: '18%', label: 'Muy baja', bg: '#B5FFFF', border: '#8AE0DB', textDark: true },
    { channel: 'Ch 13', freq: '2472', occupancy: '09%', label: 'Muy baja', bg: '#B5FFFF', border: '#8AE0DB', textDark: true },
  ];

  // Datos de interferencia CCI/ACI
  const interferenceData = [
    { channel: 'Canal 1', cci: '-91 dBm', cciImpact: '4%', aci: '-88 dBm', aciImpact: '6%', diagnosis: 'Mínima', isOptimum: true },
    { channel: 'Canal 2', cci: '-82 dBm', cciImpact: '22%', aci: '-75 dBm', aciImpact: '38%', diagnosis: 'Moderada' },
    { channel: 'Canal 3', cci: '-76 dBm', cciImpact: '34%', aci: '-71 dBm', aciImpact: '49%', diagnosis: 'Moderada' },
    { channel: 'Canal 4', cci: '-70 dBm', cciImpact: '52%', aci: '-66 dBm', aciImpact: '61%', diagnosis: 'Alta' },
    { channel: 'Canal 5', cci: '-65 dBm', cciImpact: '68%', aci: '-61 dBm', aciImpact: '74%', diagnosis: 'Severa ACI', isSevere: true },
    { channel: 'Canal 6', cci: '-54 dBm', cciImpact: '89%', aci: '-58 dBm', aciImpact: '79%', diagnosis: 'CCI severa', isCritical: true },
    { channel: 'Canal 7', cci: '-64 dBm', cciImpact: '65%', aci: '-62 dBm', aciImpact: '70%', diagnosis: 'Severa ACI', isSevere: true },
    { channel: 'Canal 11', cci: '-93 dBm', cciImpact: '3%', aci: '-90 dBm', aciImpact: '5%', diagnosis: 'Mínima', isOptimum: true },
  ];

  // Datos de estabilidad de señal
  const stabilityData = [
    { channel: 'Canal 1', delta: '±1.2 dBm', status: 'Estable', path: 'M 0 12 L 20 11 L 40 13 L 60 12 L 80 11 L 100 12', color: '#1b756f', isCritical: false },
    { channel: 'Canal 3', delta: '±3.4 dBm', status: 'Aceptable', path: 'M 0 12 L 20 9 L 40 15 L 60 10 L 80 14 L 100 12', color: '#585f69', isCritical: false },
    { channel: 'Canal 6', delta: '±7.8 dBm', status: 'Inestable', path: 'M 0 12 L 15 3 L 35 21 L 55 2 L 75 22 L 100 12', color: '#d93025', isCritical: true },
    { channel: 'Canal 9', delta: '±2.9 dBm', status: 'Aceptable', path: 'M 0 12 L 25 15 L 50 8 L 75 14 L 100 11', color: '#585f69', isCritical: false },
    { channel: 'Canal 11', delta: '±1.5 dBm', status: 'Estable', path: 'M 0 12 L 25 14 L 50 10 L 75 13 L 100 12', color: '#1b756f', isCritical: false },
  ];

  // Datos de densidad de APs
  const apDensityData = [
    { channel: 'Ch 1', count: 3, percentage: 21, isPrimary: true },
    { channel: 'Ch 2', count: 1, percentage: 7 },
    { channel: 'Ch 3', count: 2, percentage: 14 },
    { channel: 'Ch 4', count: 1, percentage: 7 },
    { channel: 'Ch 5', count: 2, percentage: 14 },
    { channel: 'Ch 6', count: 14, percentage: 100, isCongested: true },
    { channel: 'Ch 7', count: 1, percentage: 7 },
    { channel: 'Ch 8', count: 1, percentage: 7 },
    { channel: 'Ch 9', count: 0, percentage: 0 },
    { channel: 'Ch 10', count: 0, percentage: 0 },
    { channel: 'Ch 11', count: 4, percentage: 28, isPrimary: true },
  ];

  return (
    <div className="channel-analysis-container">
      {/* Encabezado técnico */}
      <div className="channel-header">
        <div className="channel-meta-col">
          <div className="channel-meta">
            <span className="channel-meta-text">Banda 2.4 GHz ISM</span>
            <span className="channel-meta-dot"></span>
            <span className="channel-meta-text">802.11 b/g/n/ax</span>
          </div>
          <h1 className="channel-title">Diagnóstico y Ocupación Espectral</h1>
        </div>

        {/* Toggle de Banda */}
        <div className="band-toggle-group">
          <button
            onClick={() => setSelectedBand('2.4GHz')}
            className={`band-toggle-btn ${selectedBand === '2.4GHz' ? 'active' : ''}`}
          >
            Banda 2.4 GHz
          </button>
          <button
            onClick={() => setSelectedBand('5GHz')}
            className={`band-toggle-btn ${selectedBand === '5GHz' ? 'active' : ''}`}
          >
            Banda 5 GHz
          </button>
        </div>
      </div>

      {/* Bloque Destacado: Canal Óptimo Recomendado */}
      <div className="recommendation-card">
        <div className="recommendation-left">
          <div className="recommendation-icon-box">
            <i className="bi bi-patch-check-fill"></i>
          </div>
          <div>
            <div className="recommendation-tagline">
              <span className="tagline-badge">Selección de canal primario</span>
              <span className="channel-meta-dot"></span>
              <span className="tagline-status">Recomendado</span>
            </div>
            <div className="recommendation-headline">
              Canal óptimo sugerido: <span className="recommendation-highlight">Canal 1</span>
            </div>
            <p className="recommendation-desc">
              3 APs concurrentes, bajo piso de ruido (-94 dBm) y 15% de ocupación de espectro.
            </p>
          </div>
        </div>
        <div className="recommendation-alternative">
          <span className="alt-label">Alternativa viable</span>
          <span className="alt-val">Canal 11 (12% ocupación)</span>
        </div>
      </div>

      {/* Mapa de Calor: Ocupación Espectral por Canal */}
      <div className="analysis-card">
        <div className="heatmap-header">
          <div>
            <h2 className="card-title">Mapa de calor de ocupación por canal</h2>
            <p className="card-subtitle">
              Evaluación continua de carga de canal durante la ventana de muestreo activa.
            </p>
          </div>

          {/* Leyenda de colores */}
          <div className="heatmap-legend">
            <span className="legend-title">Nivel de carga:</span>
            <div className="legend-item">
              <span className="legend-swatch" style={{ backgroundColor: '#B5FFFF', border: '1px solid #8AE0DB' }}></span>
              <span className="legend-label">&lt;20%</span>
            </div>
            <div className="legend-item">
              <span className="legend-swatch" style={{ backgroundColor: '#8AE0DB' }}></span>
              <span className="legend-label">20-40%</span>
            </div>
            <div className="legend-item">
              <span className="legend-swatch" style={{ backgroundColor: '#5DC1B9' }}></span>
              <span className="legend-label">40-60%</span>
            </div>
            <div className="legend-item">
              <span className="legend-swatch" style={{ backgroundColor: '#42A8A1' }}></span>
              <span className="legend-label">60-75%</span>
            </div>
            <div className="legend-item">
              <span className="legend-swatch" style={{ backgroundColor: '#239089' }}></span>
              <span className="legend-label">&gt;75%</span>
            </div>
            <div className="legend-item">
              <span className="legend-swatch" style={{ backgroundColor: '#D93025' }}></span>
              <span className="legend-label">Saturado</span>
            </div>
          </div>
        </div>

        {/* Cuadrícula de Canales 1 al 13 */}
        <div className="heatmap-scroll-wrapper">
          <div className="heatmap-grid">
            {channelsHeatmap.map((item) => (
              <div
                key={item.channel}
                className="heatmap-cell"
                style={{
                  backgroundColor: item.bg,
                  border: item.border ? `1px solid ${item.border}` : 'none',
                }}
              >
                <div className="cell-top">
                  <span
                    className="cell-channel-id"
                    style={{ color: item.textDark ? '#191c20' : '#ffffff' }}
                  >
                    {item.channel}
                  </span>
                  <span className="cell-freq-badge">
                    {item.freq}
                  </span>
                </div>
                <div className="cell-bottom">
                  <span
                    className="cell-percentage"
                    style={{
                      color: item.highlight ? '#1b756f' : item.textDark ? '#191c20' : '#ffffff',
                    }}
                  >
                    {item.occupancy}
                  </span>
                  <span
                    className="cell-status-text"
                    style={{
                      color: item.isSaturated ? '#ffffff' : item.textDark ? '#434655' : 'rgba(255,255,255,0.9)',
                      fontWeight: item.isSaturated ? 600 : 400,
                    }}
                    title={item.label}
                  >
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Grid 2 Columnas: Comparativa CCI/ACI + Estabilidad */}
      <div className="analysis-two-col">
        {/* Tabla de Interferencia Co-canal (CCI) y Adyacente (ACI) */}
        <div className="analysis-card">
          <div>
            <h2 className="card-title">Interferencia co-canal (CCI) y adyacente (ACI)</h2>
            <p className="card-subtitle">
              Evaluación de solapamiento espectral e impacto en piso de señal por canal evaluado.
            </p>
          </div>
          <div className="cci-table-wrapper">
            <table className="cci-table">
              <thead>
                <tr>
                  <th>Canal</th>
                  <th>Nivel CCI</th>
                  <th>Impacto CCI</th>
                  <th>Nivel ACI</th>
                  <th>Impacto ACI</th>
                  <th>Diagnóstico</th>
                </tr>
              </thead>
              <tbody>
                {interferenceData.map((row, idx) => (
                  <tr
                    key={idx}
                    className={row.isCritical ? 'row-critical' : ''}
                  >
                    <td className={row.isCritical ? 'channel-critical' : row.isOptimum ? 'channel-optimum' : ''}>
                      {row.channel}
                    </td>
                    <td className={row.isCritical ? 'channel-critical' : ''}>
                      {row.cci}
                    </td>
                    <td className={row.isCritical ? 'channel-critical' : ''}>
                      {row.cciImpact}
                    </td>
                    <td className={row.isCritical ? 'channel-critical' : ''}>
                      {row.aci}
                    </td>
                    <td className={row.isCritical ? 'channel-critical' : ''}>
                      {row.aciImpact}
                    </td>
                    <td>
                      {row.isCritical ? (
                        <div className="cci-diag-badge">
                          <span className="diag-dot"></span>
                          <span className="diag-critical-text">{row.diagnosis}</span>
                        </div>
                      ) : row.isSevere ? (
                        <div className="cci-diag-badge">
                          <span className="diag-dot"></span>
                          <span className="diag-severe-text">{row.diagnosis}</span>
                        </div>
                      ) : (
                        <span className="diag-normal-text">{row.diagnosis}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Estabilidad de la Señal (Delta RSSI) */}
        <div className="analysis-card">
          <div>
            <h2 className="card-title">Estabilidad de la señal</h2>
            <p className="card-subtitle">
              Variación de amplitud RSSI calculada en ventana temporal de observación.
            </p>
          </div>
          <div className="stability-list">
            {stabilityData.map((item) => (
              <div
                key={item.channel}
                className={`stability-item ${item.isCritical ? 'critical' : ''}`}
              >
                <div className="stability-left">
                  <span className={`stability-ch-name ${item.isCritical ? 'critical' : ''}`}>
                    {item.channel}
                  </span>
                  <svg className="stability-sparkline" fill="none" viewBox="0 0 100 24">
                    <path
                      d={item.path}
                      stroke={item.color}
                      strokeLinecap="round"
                      strokeWidth="2"
                    ></path>
                  </svg>
                </div>
                <div className="stability-right">
                  <span className={`stability-delta ${item.isCritical ? 'critical' : ''}`}>
                    {item.delta}
                  </span>
                  {item.isCritical ? (
                    <div className="stability-badge-critical">
                      <span className="diag-dot"></span>
                      <span className="stability-label-critical">{item.status}</span>
                    </div>
                  ) : (
                    <span className="stability-label">{item.status}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Densidad de Puntos de Acceso (APs) por Canal */}
      <div className="analysis-card">
        <div>
          <h2 className="card-title">Densidad de Puntos de Acceso (APs) por canal</h2>
          <p className="card-subtitle">
            Distribución de redes detectadas por canal en la banda de 2.4 GHz.
          </p>
        </div>

        <div className="ap-density-list">
          {apDensityData.map((item) => (
            <div key={item.channel} className="ap-density-row">
              <span className={`ap-channel-label ${item.isPrimary || item.isCongested ? 'bold' : ''}`}>
                {item.channel}
              </span>
              <div className="ap-bar-track">
                {item.percentage > 0 && (
                  <div
                    className={`ap-bar-fill ${item.isPrimary || item.isCongested ? 'teal' : 'gray'}`}
                    style={{ width: `${item.percentage}%` }}
                  >
                    {item.percentage >= 20 && `${item.count} redes`}
                  </div>
                )}
              </div>
              <span
                className={`ap-count-label ${
                  item.isCongested ? 'bold' : item.isPrimary ? 'semibold' : ''
                }`}
              >
                {item.count} {item.count === 1 ? 'red' : 'redes'}
              </span>
            </div>
          ))}
        </div>

        {/* Sumario de recomendaciones técnicas al pie */}
        <div className="footer-suggestion-alert">
          <div className="footer-alert-left">
            <i className="bi bi-info-circle-fill footer-alert-icon"></i>
            <span className="footer-alert-text">
              El Canal 6 concentra el 84% de ocupación del entorno con 14 redes activas, provocando degradación severa por colisiones 802.11.
            </span>
          </div>
          <div className="footer-alert-right">
            <span className="footer-action-label">Acción sugerida:</span>
            <span className="footer-action-val">Migrar cargas hacia Canal 1 u 11</span>
          </div>
        </div>
      </div>
    </div>
  );
}
