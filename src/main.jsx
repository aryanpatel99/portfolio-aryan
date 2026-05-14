import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'react-activity-calendar/tooltips.css';

import { ThemeProvider } from "./components/theme-provider"
import { StrictMode } from 'react';
import { Analytics } from "@vercel/analytics/react"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <App />
      <Analytics />
    </ThemeProvider>
  </StrictMode>
)
