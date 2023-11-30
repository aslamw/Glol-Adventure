import React from 'react'
import ReactDOM from 'react-dom/client'
import { Pages } from './routes'
import { Reset } from './assets/styles/global'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Reset/>
    <Pages/>
  </React.StrictMode>,
)
