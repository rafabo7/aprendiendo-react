import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { TextInput } from './Components/TextInput.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <h1>This is my first React App</h1>
    <TextInput />
    <App />
  </>
  
)
