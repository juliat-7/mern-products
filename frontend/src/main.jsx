import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from "react-router"

"use client";
import { ErrorBoundary } from "react-error-boundary";



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ErrorBoundary fallback={<div>Something went wrong in app</div>}>
        <App/>
      </ErrorBoundary>  
    </BrowserRouter>
  </StrictMode>,
)
