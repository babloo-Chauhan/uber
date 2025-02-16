import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from "react-router-dom";
import UserContext from './context/UserContext.jsx';
import CaptainProvider from './context/CaptinContext.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
 <CaptainProvider>
    <UserContext>
      <Router>
        <App />
      </Router>
    </UserContext>
    </CaptainProvider>
  
  </StrictMode>,
)
