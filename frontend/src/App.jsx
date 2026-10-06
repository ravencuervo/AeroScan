import { useState } from 'react'
import './App.css'
import LiveCapture from './components/LiveCapture'
import ChannelAnalysis from './components/ChannelAnalysis'

function App() {
  const [activeTab, setActiveTab] = useState('analisis');

  return (
    <div className="app-layout">
      {/* Sidebar de navegación */}
      <aside className="app-sidebar">
        <div>
          <div className="sidebar-brand-wrapper">
            <span className="sidebar-brand-title">AeroScan</span>
          </div>
          <div className="sidebar-nav-container">
            <nav className="sidebar-nav-list">
              <a 
                href="#captura" 
                onClick={(e) => { e.preventDefault(); setActiveTab('captura'); }}
                className={`sidebar-nav-item ${activeTab === 'captura' ? 'active' : ''}`}
              >
                <i className="bi bi-radar sidebar-nav-icon"></i>
                <span>Captura en vivo</span>
              </a>
              <a 
                href="#analisis" 
                onClick={(e) => { e.preventDefault(); setActiveTab('analisis'); }}
                className={`sidebar-nav-item ${activeTab === 'analisis' ? 'active' : ''}`}
              >
                <i className="bi bi-bar-chart-line-fill sidebar-nav-icon"></i>
                <span>Análisis de canales</span>
              </a>
              <a 
                href="#historial" 
                onClick={(e) => { e.preventDefault(); setActiveTab('historial'); }}
                className={`sidebar-nav-item ${activeTab === 'historial' ? 'active' : ''}`}
              >
                <i className="bi bi-clock-history sidebar-nav-icon"></i>
                <span>Historial</span>
              </a>
              <a 
                href="#reportes" 
                onClick={(e) => { e.preventDefault(); setActiveTab('reportes'); }}
                className={`sidebar-nav-item ${activeTab === 'reportes' ? 'active' : ''}`}
              >
                <i className="bi bi-file-earmark-pdf-fill sidebar-nav-icon"></i>
                <span>Reportes</span>
              </a>
            </nav>
          </div>
        </div>
      </aside>

      {/* Espacio principal de trabajo */}
      <div className="app-workspace">
        {/* Header superior */}
        <header className="app-header">
          <div className="header-breadcrumb">
            <span 
              onClick={() => setActiveTab('captura')} 
              className="breadcrumb-root"
            >
              AeroScan
            </span>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">
              {activeTab === 'captura' 
                ? 'Captura en vivo' 
                : activeTab === 'analisis' 
                ? 'Monitor de Espectro' 
                : activeTab === 'historial' 
                ? 'Historial de Capturas' 
                : 'Reportes'}
            </span>
          </div>
          <div className="header-user-avatar">
            <i className="bi bi-person"></i>
          </div>
        </header>

        {/* Contenido principal según la pestaña activa */}
        <main className="app-main-content">
          {activeTab === 'captura' && <LiveCapture />}
          {activeTab === 'analisis' && <ChannelAnalysis />}
          {activeTab !== 'captura' && activeTab !== 'analisis' && (
            <div className="placeholder-section">
              <i className="bi bi-tools placeholder-icon"></i>
              <p className="placeholder-text">El módulo de {activeTab} se encuentra en desarrollo.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default App
