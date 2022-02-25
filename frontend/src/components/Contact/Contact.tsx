import { faEnvelopeOpenText, faPeopleCarryBox, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Car, CarsList } from '../CarList/CarList'
import './Contact.scss';

const Contact: React.FC = (): JSX.Element => {
  const [data, setData] = useState<Car[]>([])
  useEffect(() => {
    // GET all the data from server
    axios.get('http://localhost:8000/cars')
      .then((result: CarsList) => {
        const data: Car[] = result.data;
        setData(data);
      })
      .catch((err: Error) => console.error(err))
  }, [])
  // Filter data to get Warehouses
  const warehouses: Car[] = data.filter((element: Car) => {
    return element.list_location_long !== ""
  })
  return (
    <div className='Contact'>
      <div className='contactWays'>
        <div>
          <FontAwesomeIcon className="icons" icon={faPhoneVolume} />
          <h4>Call to me: </h4>
          <p>+48 501222566</p>
          <br />
          <p>+48 664121734</p>
          <br />
          <p>58 303 94 94</p>
        </div>
        <div>
          <FontAwesomeIcon className="icons" icon={faEnvelopeOpenText} />
          <h4>Mail to me : </h4>
          <p> frankycars@gmail.com </p>
          <br />
          <p> fsmith@gmail.com </p>
        </div>
        <div>
          <FontAwesomeIcon className="icons" icon={faPeopleCarryBox} />
          <h4> Visit one of my Warehouses :</h4>
          {warehouses !== [] ? warehouses.map((element: Car, index: number) => {
            return <p key={index}>{element.list_name} location: {element.list_location_lat}, {element.list_location_long}</p>
          }) : null}
        </div>
      </div>
    </div>
  )
}
export default Contact