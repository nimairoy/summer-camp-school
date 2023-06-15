import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { Autoplay, EffectCube, Navigation, Pagination } from "swiper";


import slider1 from '../../../assets/slider/slider1.png'
import slider2 from '../../../assets/slider/slider2.png'
import slider3 from '../../../assets/slider/slider3.png'
import slider4 from '../../../assets/slider/slider4.png'
import slider5 from '../../../assets/slider/slider5.png'

const Banner = () => {
  return (
    <Swiper
      effect={"cube"}
      grabCursor={true}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
      centeredSlides={true}
      autoplay={{
        delay: 6000,
        duration: 3000,
        disableOnInteraction: true,
      }}
      loop={true}
      pagination={true}
      modules={[EffectCube, Autoplay, Pagination, Navigation]}
      navigation={true}
      className="mySwiper"
    >
      <SwiperSlide className="relative">
        <img className="w-full h-screen" src={slider1} alt="" />
        <div className="overlay bg-gray-800 opacity-20 absolute top-0 left-0 right-0 bottom-0">
        </div>
        <div className='absolute w-full top-36 left-40'>
          <h2 className="text-7xl animated-slide-in-left  text-white">Meditation</h2>
          <p className="text-yellow-300 animated-slide-in-right mt-4 text-3xl">practise for all</p>
          <button className="btn animated-slide-in-left btn-warning mt-10">Make an Appointment</button>
        </div>
      </SwiperSlide>
      <SwiperSlide className="relative">
        <img className="w-full h-screen" src={slider2} alt="" />
        <div className="overlay bg-gray-800 opacity-20 absolute top-0 left-0 right-0 bottom-0">
        </div>
        <div className='absolute w-full top-1/2 -translate-y-1/2 left-40'>
          <h2 className="text-7xl animated-slide-in-left text-white">Meditation</h2>
          <p className="text-yellow-300 animated-slide-in-right mt-4 text-3xl">practise for all</p>
          <button className="btn animated-slide-in-left btn-warning mt-10">Make an Appointment</button>
        </div>
      </SwiperSlide>
      <SwiperSlide className="relative">
        <img className="w-full h-screen" src={slider3} alt="" />
        <div className="overlay bg-gray-800 opacity-20 absolute top-0 left-0 right-0 bottom-0">
        </div>
        <div className='absolute w-full top-1/2 -translate-y-1/2 left-40'>
          <h2 className="text-7xl animated-slide-in-left text-white">Meditation</h2>
          <p className="text-yellow-300 animated-slide-in-right mt-4 text-3xl">practise for all</p>
          <button className="btn animated-slide-in-left btn-warning mt-10">Make an Appointment</button>
        </div>
      </SwiperSlide>
      <SwiperSlide className="relative">
        <img className="w-full h-screen" src={slider4} alt="" />
        <div className="overlay bg-gray-800 opacity-20 absolute top-0 left-0 right-0 bottom-0">
        </div>
        <div className='absolute w-full top-1/2 -translate-y-1/2 left-40'>
          <h2 className="text-7xl animated-slide-in-left text-white">Meditation</h2>
          <p className="text-yellow-300 animated-slide-in-right mt-4  text-3xl">practise for all</p>
          <button className="btn animated-slide-in-left btn-warning mt-10">Make an Appointment</button>
        </div>
      </SwiperSlide>
      <SwiperSlide className="relative">
        <img className="w-full h-screen" src={slider5} alt="" />
        <div className="overlay bg-gray-800 opacity-20 absolute top-0 left-0 right-0 bottom-0">
        </div>
        <div className='absolute w-full top-1/2 -translate-y-1/2 left-40'>
          <h2 className="text-7xl animated-slide-in-left text-white">Meditation</h2>
          <p className="text-yellow-300 animated-slide-in-right mt-4 text-3xl">practise for all</p>
          <button className="btn animated-slide-in-left btn-warning mt-10"><span>Make an Appointment</span></button>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;