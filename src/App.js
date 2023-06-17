import React from 'react'
import GlobalStyles from 'styles/GlobalStyles'
import Home from 'pages/Home'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

// app comp
export default function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/me" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}
