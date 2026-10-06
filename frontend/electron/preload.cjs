const { contextBridge, ipcRenderer } = require('electron');

// Exponer APIs seguras al contexto de React
contextBridge.exposeInMainWorld('aeroScanAPI', {
  platform: process.platform,
  version: '1.0.0',
  send: (channel, data) => {
    const validChannels = ['toMain'];
    if (validChannels.includes(channel)) {
      ipcRenderer.send(channel, data);
    }
  },
  receive: (channel, func) => {
    const validChannels = ['fromMain'];
    if (validChannels.includes(channel)) {
      ipcRenderer.on(channel, (event, ...args) => func(...args));
    }
  },
});
