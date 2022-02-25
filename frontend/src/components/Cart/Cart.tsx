import { faCircleMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { Car } from '../CarList/CarList';
import './Cart.scss'

const Cart = (props: any): JSX.Element => {
  let sum: number = 0;
  // Define func that updates Cart view when Car is deleted
  const useForceUpdate = (): Function => {
    const [value, setValue] = useState<number>(0);
    return () => setValue((value: number) => value + 1); // update the state to force render
  }
  const forceUpdate: Function = useForceUpdate();
  props.cartItem.forEach((element: Car): string => {
    const price: any = element.list_cars_vehicles_price
    sum += parseFloat(price)
    // Reduce float precision to 2 number after "."
    return sum.toFixed(2)
  })
  const deleteFromCart = (element: Car): void => {
    const index = props.cartItem.indexOf(element);
    props.cartItem.splice(index, 1);
    // First update this Component then update App Component 
    forceUpdate();
    props.updateApp();
  }
  return (
    <div className='Cart'>
      <h1>Products in cart ({props.cartItem.length})</h1>
      <ul className='cartItemList'>
        {props.cartItem.map((elem: Car, index: number): JSX.Element => {
          return (
            <li key={index}>
              <p>{index + 1}.</p>
              <p> {elem.list_cars_vehicles_make}</p>
              <p>-</p>
              <p> {elem.list_cars_vehicles_model}</p>
              <p> {elem.list_cars_vehicles_year_model}</p>
              <p>{elem.list_cars_vehicles_price} <span>PLN</span></p>
              <FontAwesomeIcon className='deleteFromCart' icon={faCircleMinus} onClick={(): void => deleteFromCart(elem)} />
            </li>
          )
        })}
        {console.log(props.cartItem)}
        {props.cartItem.length !== 0 ? <h4>Summary: {sum} PLN</h4> : null}
        {props.cartItem.length !== 0 ? <button>Submit order</button> : null}
      </ul>
    </div>
  )
}
export default Cart