import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'  
import './index.css'
import App from './App.jsx'
import { DataProvider } from './components/DataProvider/DataProvider.jsx'
import {reducer,initialState } from './utility/reducer.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider reducer={reducer} initialState={initialState}>
    <BrowserRouter>   
      <App />
    </BrowserRouter>
    </DataProvider>
  </StrictMode>,
)