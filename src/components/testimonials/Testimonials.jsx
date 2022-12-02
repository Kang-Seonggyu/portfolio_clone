import React from "react";
import './testimonials.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import 'swiper/css/navigation';
import "swiper/css/pagination";

import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

const clientData = [
  {
    avatar : AVTR1,
    name : 'Tina Snow',
    review : "내 오래된 친구인 널 좋아하게 됐나 봐 아무렇지 않은 듯 널 대해도 마음은 늘 떨렸어"
  },
  {
    avatar : AVTR2,
    name : 'Shatta Wale',
    review : "미소짓는 너를 보면 우리 사이가 어색할까 두려워 아무런 말 하지 못한 채 돌아서면 눈물만 흘렸어"
  },
  {
    avatar : AVTR3,
    name : 'Kwame Despite',
    review : "말해야 하는데 네 앞에 서면 아무 말 못하는 내가 미워져 용기를 내야해 후회하지 않게"
  },
  {
    avatar : AVTR4,
    name : 'Nana Ama McBrown',
    review : "조금씩 너에게 다가가 날 고백해야해"
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container mySwiper"
        pagination={{ clickable:true }}
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
      >
        {
          clientData.map((data,idx) => {
            return (
              <SwiperSlide className="testimonial" key={idx}>
                <div className="client__avatar">
                  <img src={data.avatar} alt={data.name} />
                </div>
                <h5 className="client__name">{data.name}</h5>
                <small className="client__review">
                  {data.review}
                </small>
              </SwiperSlide>
            )})
        }
      </Swiper>
    </section>
  )
}

export default Testimonials