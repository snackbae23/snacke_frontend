import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SnackBaeProvider } from './context/SnackBae.jsx';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SnackBaeProvider>
      <App />
    </SnackBaeProvider>
    <Toaster />
  </React.StrictMode>
)
