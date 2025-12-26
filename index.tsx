
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

const rootElement = document.getElementById('root');

if (rootElement) {
  try {
    const root = createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (err) {
    console.error("Mounting Error:", err);
    rootElement.innerHTML = `<div style="padding: 20px; color: red;">Failed to start the app. Check console for details.</div>`;
  }
} else {
  console.error("Critical Error: Root element not found");
}
