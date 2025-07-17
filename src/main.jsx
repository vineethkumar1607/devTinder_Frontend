import './index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import App from './App.jsx'
import { appStore } from "./utils/redux/appStore.js"

createRoot(document.getElementById('root')).render(
  <Provider store={appStore}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
)
