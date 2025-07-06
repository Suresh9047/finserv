import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Slide1 from "../assets/slides/slide1.jpg";
import Slide2 from "../assets/slides/slide2.jpg";
import Slide3 from "../assets/slides/slide3.jpg";
import Slide4 from "../assets/slides/slide4.jpg";
import Slide5 from "../assets/slides/slide5.jpg";

const productImages = [
  { src: Slide1, alt: "Personal Loan" },
  { src: Slide2, alt: "Business Loan" },
  { src: Slide3, alt: "Short Term Loan" },
  { src: Slide4, alt: "Home Loan" },
  { src: Slide5, alt: "Credit Card" },
];

const ProductCarousel = () => {
  return (
    <section className="bg-white py-10">
      <h2 className="text-center text-3xl font-bold text-[#FF8800] mb-6">Our Products</h2>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {productImages.map((item) => (
          <SwiperSlide key={item.src} className="flex justify-center">
            <img
              src={item.src}
              alt={item.alt}
              className="w-full max-w-[300px] h-[200px] object-cover rounded-lg shadow-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ProductCarousel;
