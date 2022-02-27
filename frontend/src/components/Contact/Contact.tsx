import { faEnvelopeOpenText, faPeopleCarryBox, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Car, CarsList } from '../CarList/CarList'
import { endpointURL } from '../Home/Home';
import './Contact.scss';

const Contact: React.FC = (): JSX.Element => {
  const [data, setData] = useState<Car[]>([])
  useEffect(() => {
    // GET all the data from server
    axios.get(endpointURL)
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
  const googleMapLinks: string[] = [
    "https://www.google.pl/maps/place/47%C2%B007'52.0%22N+61%C2%B032'52.8%22W/@47.1311136,-61.5501987,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xeaf4954ca392aa12!8m2!3d47.13111!4d-61.54801",
    "https://www.google.pl/maps/place/15%C2%B057'13.9%22N+7%C2%B003'44.9%22E/@16.4298073,7.0369674,7.25z/data=!4m5!3m4!1s0x0:0xe1e576427107b0fe!8m2!3d15.95386!4d7.06246",
    "https://www.google.com/maps/place/39%C2%B007'40.4%22N+2%C2%B042'50.3%22W/@38.7557766,-2.7129601,8.63z/data=!4m5!3m4!1s0x0:0xc6469b870fd6dd0d!8m2!3d39.12788!4d-2.71398?hl=pl-PL",
    "https://www.google.com/maps/place/70%C2%B050'36.7%22N+132%C2%B013'24.4%22E/@70.9955027,132.7700906,7.42z/data=!4m5!3m4!1s0x0:0x32adb354302244ee!8m2!3d70.84354!4d132.22345?hl=pl-PL"
  ]
  return (
    <div className='Contact'>
      <div className='contactWays'>
        <div>
          <FontAwesomeIcon className="icons" icon={faPhoneVolume} />
          <h4>Call to me </h4>
          <p>+48 501222566</p>
          <br />
          <p>+48 664121734</p>
          <br />
          <p>58 303 94 94</p>
        </div>
        <div>
          <FontAwesomeIcon className="icons" icon={faEnvelopeOpenText} />
          <h4>Mail to me </h4>
          <p> frankycars@gmail.com </p>
          <br />
          <p> fsmith@gmail.com </p>
        </div>
        <div>
          <FontAwesomeIcon className="icons" icon={faPeopleCarryBox} />
          <h4> Visit one of my Warehouses</h4>
          {warehouses !== [] ? warehouses.map((element: Car, index: number) => {
            return <p key={index}>{element.list_name} :
              <a href={googleMapLinks[index]}>localitazion</a></p>
          }) : null}
        </div>
      </div>
    </div>
  )
}
export default Contact