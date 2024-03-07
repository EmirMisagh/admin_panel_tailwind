import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Playlist({ playlist }) {
  console.log(playlist);
  return (
    <div className="w-full h-full rounded-2xl box">
      <Swiper
        className="w-full h-full rounded-2xl"
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        {playlist.map((item, index) => (
          <SwiperSlide
            key={index}
            className="w-full h-full flex justify-center"
          >
            <div className="relative w-full h-full">
              <div className="absolute left-0 top-0 w-full h-full">
                <img
                  className="w-full h-full object-cover"
                  src={item.image}
                  alt=""
                />
              </div>
              <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-t from-black">
                <div className=" flex flex-col gap-2 justify-end h-full px-5">
                  <div className="py-6 flex flex-col gap-2">
                    <p className=" text-theme200 font-bold truncate uppercase text-xs">
                      {item.show ? "Published" : "Private"}
                    </p>
                    <h3 className="text-lg font-bold truncate text-white">
                      Playlist {item.name}
                    </h3>
                    <p className=" text-gray-300 text-sm font-bold truncate ">
                      If you are going to use a passage of Lorem Ipsum, you need
                      to be sure
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Playlist;
