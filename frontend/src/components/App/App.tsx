import React, { useState } from 'react'
import Home from '../Home/Home'
import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom'
import Contact from '../Contact/Contact'
import Navbar from '../Navbar/Navbar'
import './App.scss'
import Cart from '../Cart/Cart'
import { Car } from '../CarList/CarList'
import { Sidebar } from '../Sidebar/Sidebar'

const App = (): JSX.Element => {
  // It controlls displaying of mobile menu (bars icon)
  const [barsIcon, setBarsIcon] = useState(true)
  const [cartItem, setCart] = useState<Car[]>([])
  // This func is made to rerender number of cart items after deleting it in Cart component
  const useForceUpdate = (): Function => {
    const [value, setValue] = useState<number>(0);
    return (): void => setValue((value: number) => value + 1); // update the state to force render
  }
  // Handle change of Cart Item Array
  const handleChange = (newValue: Car): void => {
    const value = [...cartItem, newValue]
    setCart(value);
  }
  const forceUpdate: Function = useForceUpdate();
  // Home props
  const props = {
    children: handleChange,
  }
  return (
    <Router>
      <div className='App'>
        <Navbar cartItem={cartItem} setBarsIcon={setBarsIcon} barsIcon={barsIcon} />
        <Switch>
          <Route path="/" element={<Home {...props} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart cartItem={cartItem} updateApp={forceUpdate} />} />
          <Route path='/sidebar' element={<Sidebar setBarsIcon={setBarsIcon} />} />
        </Switch>
      </div>
    </Router>
  )
}
export default App;