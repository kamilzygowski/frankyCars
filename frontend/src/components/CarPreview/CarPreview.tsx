import React, { useRef } from 'react'
import { Car } from '../CarList/CarList';
import './CarPreview.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Scrollbar } from "swiper";
import 'swiper/swiper-bundle.min.css'
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

interface CarProps {
  thisCar: Car;
  thisWarehouse: Car;
  cartItem: (arg: Car) => void;
  toggleState: () => void;
}

SwiperCore.use([Navigation, Pagination]);

const CarPreview:React.FC<CarProps> = ({thisCar, thisWarehouse, cartItem, toggleState}): JSX.Element => {
  const checkIconRef = useRef<any>(null);
  const addToCart = (): void => {
    cartItem(thisCar);
    if (checkIconRef.current !== null) checkIconRef.current.style = "display:block";
    // On Add to cart click user sees big check icon for 0.8 s
    setTimeout((): void => {
      if (checkIconRef.current !== null)
        checkIconRef.current.style = "display:none";
    }, 650);
  }
  return (
    <div className='CarPreview' onClick={() => toggleState()}>
      <div className='itemAddedToCart' ref={checkIconRef} data-testid="itemAddedToCart">
        <FontAwesomeIcon icon={faCheck} className="checkIcon" />
      </div>

      {/* This line below makes clicking on Car info toggles showing this components state as well like the above line
      so those 2 lines neutralize each other on the below component */}
      <div className='details' onClick={() => toggleState()}>
        <div className='detailsText'>
          <h1>Car details</h1>
          <p><span>Make :</span> {thisCar.list_cars_vehicles_make}</p>
          <p><span>Model :</span> {thisCar.list_cars_vehicles_model}</p>
          <p><span>Production year :</span> {thisCar.list_cars_vehicles_year_model}</p>
          <p><span>Price :</span> {thisCar.list_cars_vehicles_price} PLN</p>
          <p><span>Location :</span> {thisCar.list_cars_location}</p>
          <p><span>Warehouse :</span> {thisWarehouse.list_name}</p>
          <button className='addToCart' onClick={addToCart}>Add to cart</button>
        </div>
        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation, Scrollbar]}
          className="mySwiper"
          scrollbar={{ draggable: true }}
          autoplay={true}
          thumbs={true}
          loop={true}
        >
          <SwiperSlide><img src="https://i.postimg.cc/4dyd96cq/pexels-erik-mclean-4062395-1.webp" alt="car" /></SwiperSlide>
          <SwiperSlide><img src="https://i.postimg.cc/Sx4czPxP/pexels-revac-film-s-photography-205337.webp" alt="car" /></SwiperSlide>
          <SwiperSlide><img src="https://i.postimg.cc/JhP006sj/pexels-alex-amorales-909907-1.webp" alt="car" /></SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}
export default CarPreview;