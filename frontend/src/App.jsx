import { useState } from 'react'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('captura');
  const [isCapturing, setIsCapturing] = useState(false);
  const [activeBand, setActiveBand] = useState('2.4GHz');

  return (
    <div className="bg-[#f8f9ff] font-sans text-[#191c20] antialiased min-h-screen flex">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 border-r z-50 flex flex-col justify-between bg-[#f2f3f9] border-[#e3e6ef]">
        <div className="flex flex-col">
          <div className="h-16 px-6 flex items-center border-b border-[#e3e6ef]">
            <span className="text-[20px] font-bold tracking-tight text-[#1a1d21]">AeroScan</span>
          </div>
          <div className="p-4">
            <nav className="flex flex-col gap-1">
              <a 
                href="#" 
                onClick={() => setActiveTab('captura')}
                className={`flex items-center gap-4 px-4 py-2.5 font-medium rounded-lg transition-colors ${activeTab === 'captura' ? 'bg-[#239089] text-white' : 'text-[#1a1d21] hover:bg-[#93C5FD]'}`}
              >
                <i className="bi bi-radar text-[20px]"></i>
                <span>Captura en vivo</span>
              </a>
              <a 
                href="#" 
                onClick={() => setActiveTab('analisis')}
                className={`flex items-center gap-4 px-4 py-2.5 font-medium rounded-lg transition-colors ${activeTab === 'analisis' ? 'bg-[#239089] text-white' : 'text-[#1a1d21] hover:bg-[#93C5FD]'}`}
              >
                <i className="bi bi-bar-chart-line-fill text-[20px]"></i>
                <span>Análisis de canales</span>
              </a>
              <a 
                href="#" 
                onClick={() => setActiveTab('historial')}
                className={`flex items-center gap-4 px-4 py-2.5 font-medium rounded-lg transition-colors ${activeTab === 'historial' ? 'bg-[#239089] text-white' : 'text-[#1a1d21] hover:bg-[#93C5FD]'}`}
              >
                <i className="bi bi-clock-history text-[20px]"></i>
                <span>Historial</span>
              </a>
              <a 
                href="#" 
                onClick={() => setActiveTab('reportes')}
                className={`flex items-center gap-4 px-4 py-2.5 font-medium rounded-lg transition-colors ${activeTab === 'reportes' ? 'bg-[#239089] text-white' : 'text-[#1a1d21] hover:bg-[#93C5FD]'}`}
              >
                <i className="bi bi-file-earmark-pdf-fill text-[20px]"></i>
                <span>Reportes</span>
              </a>
            </nav>
          </div>
        </div>
      </aside>

      <div className="pl-64 flex-1 flex flex-col">
        {/* Header */}
        <header className="fixed top-0 left-64 right-0 h-16 z-40 flex items-center justify-between px-8 bg-[#239089]">
          <div className="flex items-center gap-2 text-sm font-medium">
            <span className="text-white opacity-80 hover:opacity-100 transition-opacity cursor-pointer">AeroScan</span>
            <span className="text-white opacity-60">/</span>
            <span className="text-white font-medium capitalize">{activeTab.replace('-', ' ')}</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full flex items-center justify-center border border-white/20 bg-white/10">
              <i className="bi bi-person text-white text-[18px]"></i>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="relative pt-16 w-full p-8 min-h-screen">
          {activeTab === 'captura' ? (
            <div className="flex flex-col gap-6 w-full">
              {/* Toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-lg border bg-white border-[#d9e0ec]">
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => setIsCapturing(true)}
                    className={`flex items-center gap-2 px-4 py-2 text-white rounded font-medium text-sm transition-opacity ${isCapturing ? 'opacity-50' : 'hover:opacity-95'} bg-[#1b756f]`}
                  >
                    <i className="bi bi-play-fill text-[18px]"></i>
                    Iniciar captura
                  </button>
                  <button 
                    onClick={() => setIsCapturing(false)}
                    className={`flex items-center gap-2 px-4 py-2 rounded font-medium text-sm border transition-colors bg-white border-[#1b756f] text-[#1b756f] ${!isCapturing ? 'opacity-50' : 'hover:bg-slate-50'}`}
                  >
                    <i className="bi bi-stop-fill text-[18px]"></i>
                    Detener captura
                  </button>
                </div>
                <div className="flex items-center p-1 rounded border gap-1 bg-[#f8fafc] border-[#d9e0ec]">
                  <button 
                    onClick={() => setActiveBand('2.4GHz')}
                    className={`px-4 py-1 font-medium text-sm rounded transition-all ${activeBand === '2.4GHz' ? 'bg-[#1b756f] text-white' : 'bg-white text-[#0f1b3d] border border-transparent hover:text-black'}`}
                  >
                    2.4 GHz
                  </button>
                  <button 
                    onClick={() => setActiveBand('5GHz')}
                    className={`px-4 py-1 font-medium text-sm rounded transition-all ${activeBand === '5GHz' ? 'bg-[#1b756f] text-white' : 'bg-white text-[#0f1b3d] border border-transparent hover:text-black'}`}
                  >
                    5 GHz
                  </button>
                </div>
              </div>

              {/* Alert */}
              <div className="flex items-center justify-between p-4 rounded-lg border bg-[#fdecec] border-[#f8b4b4]">
                <div className="flex items-center gap-4">
                  <span className="w-2.5 h-2.5 rounded-full shrink-0 bg-[#d93025]"></span>
                  <span className="font-semibold text-sm text-[#0f1b3d]">Interferencia detectada:</span>
                  <span className="font-medium text-sm text-[#0f1b3d]">Canal 6 crítico (<span className="text-[#d93025] font-semibold">alta saturación, 84% de ocupación</span>)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full inline-block bg-[#d93025]"></span>
                  <span className="font-semibold text-sm text-[#d93025]">Severidad alta</span>
                </div>
              </div>

              {/* Spectrum Chart */}
              <div className="flex flex-col p-6 rounded-lg border bg-white border-[#d9e0ec]">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-semibold text-sm text-[#0f1b3d]">Espectro RSSI vs. canales</span>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded shrink-0 bg-[#1b756f]"></span>
                      <span className="text-sm font-medium text-[#585f69]">Corp-Industrial-01 (Ch 1)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded shrink-0 bg-[#d93025]"></span>
                      <span className="text-sm font-medium text-[#585f69]">Saturación Ch 6</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded shrink-0 bg-[#1b756f]"></span>
                      <span className="text-sm font-medium text-[#585f69]">IT-Infraestructura (Ch 11)</span>
                    </div>
                  </div>
                </div>
                <div className="relative w-full h-64">
                  <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 240">
                    <line stroke="#E2E8F0" strokeWidth="1" x1="50" x2="980" y1="20" y2="20"></line>
                    <line stroke="#E2E8F0" strokeWidth="1" x1="50" x2="980" y1="60" y2="60"></line>
                    <line stroke="#E2E8F0" strokeWidth="1" x1="50" x2="980" y1="100" y2="100"></line>
                    <line stroke="#E2E8F0" strokeWidth="1" x1="50" x2="980" y1="140" y2="140"></line>
                    <line stroke="#E2E8F0" strokeWidth="1" x1="50" x2="980" y1="180" y2="180"></line>
                    <line stroke="#E2E8F0" strokeWidth="1" x1="50" x2="980" y1="220" y2="220"></line>
                    <text className="text-sm font-medium" fill="#747686" x="10" y="24" fontSize="13">-30 dBm</text>
                    <text className="text-sm font-medium" fill="#747686" x="10" y="64" fontSize="13">-40 dBm</text>
                    <text className="text-sm font-medium" fill="#747686" x="10" y="104" fontSize="13">-50 dBm</text>
                    <text className="text-sm font-medium" fill="#747686" x="10" y="144" fontSize="13">-60 dBm</text>
                    <text className="text-sm font-medium" fill="#747686" x="10" y="184" fontSize="13">-70 dBm</text>
                    <text className="text-sm font-medium" fill="#747686" x="10" y="224" fontSize="13">-90 dBm</text>
                    <path d="M 60 220 Q 130 65 200 220 Z" fill="#1B756F" fillOpacity="0.12" stroke="#1B756F" strokeWidth="2"></path>
                    <path d="M 330 220 Q 450 115 570 220 Z" fill="#D93025" fillOpacity="0.12" stroke="#D93025" strokeWidth="2"></path>
                    <path d="M 360 220 Q 450 135 540 220 Z" fill="#D93025" fillOpacity="0.08" stroke="#D93025" strokeDasharray="4" strokeWidth="1.5"></path>
                    <path d="M 380 220 Q 450 170 520 220 Z" fill="#D93025" fillOpacity="0.06" stroke="#D93025" strokeWidth="1"></path>
                    <path d="M 690 220 Q 770 90 850 220 Z" fill="#1B756F" fillOpacity="0.12" stroke="#1B756F" strokeWidth="2"></path>
                    <line stroke="#E2E8F0" strokeWidth="1" x1="130" x2="130" y1="20" y2="220"></line>
                    <line stroke="#E2E8F0" strokeWidth="1" x1="450" x2="450" y1="20" y2="220"></line>
                    <line stroke="#E2E8F0" strokeWidth="1" x1="770" x2="770" y1="20" y2="220"></line>
                    <text className="text-sm font-semibold" fill="#0F1B3D" x="120" y="236" fontSize="13">Ch 1</text>
                    <text className="text-sm font-medium" fill="#747686" x="195" y="236" fontSize="13">2</text>
                    <text className="text-sm font-medium" fill="#747686" x="260" y="236" fontSize="13">3</text>
                    <text className="text-sm font-medium" fill="#747686" x="325" y="236" fontSize="13">4</text>
                    <text className="text-sm font-medium" fill="#747686" x="390" y="236" fontSize="13">5</text>
                    <text className="text-sm font-semibold" fill="#D93025" x="440" y="236" fontSize="13">Ch 6</text>
                    <text className="text-sm font-medium" fill="#747686" x="515" y="236" fontSize="13">7</text>
                    <text className="text-sm font-medium" fill="#747686" x="580" y="236" fontSize="13">8</text>
                    <text className="text-sm font-medium" fill="#747686" x="645" y="236" fontSize="13">9</text>
                    <text className="text-sm font-medium" fill="#747686" x="710" y="236" fontSize="13">10</text>
                    <text className="text-sm font-semibold" fill="#0F1B3D" x="760" y="236" fontSize="13">Ch 11</text>
                    <text className="text-sm font-medium" fill="#747686" x="835" y="236" fontSize="13">12</text>
                    <text className="text-sm font-medium" fill="#747686" x="900" y="236" fontSize="13">13</text>
                  </svg>
                </div>
              </div>

              {/* Table */}
              <div className="flex flex-col rounded-lg border overflow-hidden bg-white border-[#d9e0ec]">
                <div className="px-6 py-4 border-b border-[#d9e0ec] flex items-center justify-between">
                  <span className="font-semibold text-sm text-[#0f1b3d]">Redes detectadas (3)</span>
                  <span className="text-sm font-medium text-[#585f69]">Filtro activo: {activeBand}</span>
                </div>
                <div className="w-full overflow-x-auto">
                  <table className="w-full border-collapse text-left">
                    <thead className="bg-[#e6f6f5]">
                      <tr className="border-b border-[#d9e0ec]">
                        <th className="py-3.5 px-4 text-sm font-semibold text-[#0f1b3d]">SSID</th>
                        <th className="py-3.5 px-4 text-sm font-semibold text-[#0f1b3d]">BSSID</th>
                        <th className="py-3.5 px-4 text-sm font-semibold text-[#0f1b3d]">Canal</th>
                        <th className="py-3.5 px-4 text-sm font-semibold text-[#0f1b3d]">Banda</th>
                        <th className="py-3.5 px-4 text-sm font-semibold text-[#0f1b3d]">RSSI (dBm)</th>
                        <th className="py-3.5 px-4 text-sm font-semibold text-[#0f1b3d]">Cifrado</th>
                      </tr>
                    </thead>
                    <tbody className="text-xs" style={{fontFeatureSettings: "'tnum'"}}>
                      <tr className="border-b border-[#d9e0ec] hover:bg-slate-50 transition-colors">
                        <td className="py-3.5 px-4 font-medium text-sm text-[#0f1b3d]">Corp-Industrial-01</td>
                        <td className="py-3.5 px-4 text-sm text-[#585f69]">E4:8D:8C:1A:00:11</td>
                        <td className="py-3.5 px-4 text-sm text-[#0f1b3d]">1</td>
                        <td className="py-3.5 px-4 text-sm text-[#585f69]">2.4 GHz</td>
                        <td className="py-3.5 px-4 font-semibold text-sm text-[#1b756f]">-45 dBm</td>
                        <td className="py-3.5 px-4 text-sm font-medium text-[#0f1b3d]">WPA3</td>
                      </tr>
                      <tr className="border-b border-[#d9e0ec] hover:bg-slate-50 transition-colors">
                        <td className="py-3.5 px-4 font-medium text-sm text-[#0f1b3d]">Red-Visitantes</td>
                        <td className="py-3.5 px-4 text-sm text-[#585f69]">E4:8D:8C:1A:00:12</td>
                        <td className="py-3.5 px-4 text-sm text-[#0f1b3d]">6</td>
                        <td className="py-3.5 px-4 text-sm text-[#585f69]">2.4 GHz</td>
                        <td className="py-3.5 px-4 font-semibold text-sm text-[#0f1b3d]">-62 dBm</td>
                        <td className="py-3.5 px-4 text-sm font-medium">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full inline-block shrink-0 bg-[#d93025]"></span>
                            <span className="text-[#d93025] font-medium">Abierta</span>
                          </div>
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3.5 px-4 font-medium text-sm text-[#0f1b3d]">IT-Infraestructura</td>
                        <td className="py-3.5 px-4 text-sm text-[#585f69]">00:1A:2B:6F:C1:88</td>
                        <td className="py-3.5 px-4 text-sm text-[#0f1b3d]">11</td>
                        <td className="py-3.5 px-4 text-sm text-[#585f69]">2.4 GHz</td>
                        <td className="py-3.5 px-4 font-semibold text-sm text-[#1b756f]">-52 dBm</td>
                        <td className="py-3.5 px-4 text-sm font-medium text-[#0f1b3d]">WPA3</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ) : (
             <div className="flex flex-col items-center justify-center h-64 text-slate-400 mt-20">
               <i className="bi bi-tools text-5xl mb-4 opacity-50"></i>
               <p className="text-lg">El área de {activeTab} se encuentra en desarrollo.</p>
             </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default App
