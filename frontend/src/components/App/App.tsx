import React from 'react'
import Home from '../Home/Home'
import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom'
import Cart from '../Cart/Cart'

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;