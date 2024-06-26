import React from 'react';
import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full relative overflow-hidden">
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full rounded-lg" />
        <div className="absolute flex h-full items-center rounded-xl left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          <div className="text-white space-y-7 pl-4 lg:pl-12 lg:w-1/2">
            <h2 className="text-base sm:text-3xl lg:text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-primary mr-5">Discover More</button>
              <button className="btn btn-outline btn-warning hover:bg-yellow-500 hover:text-gray-900 transition duration-300">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full rounded-lg" />
        <div className="absolute flex h-full items-center rounded-xl left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          <div className="text-white space-y-7 pl-4 lg:pl-12 lg:w-1/2">
            <h2 className="text-base sm:text-3xl lg:text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-primary mr-5">Discover More</button>
              <button className="btn btn-outline btn-warning hover:bg-yellow-500 hover:text-gray-900 transition duration-300">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full rounded-lg" />
        <div className="absolute flex h-full items-center rounded-xl left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          <div className="text-white space-y-7 pl-4 lg:pl-12 lg:w-1/2">
            <h2 className="text-base sm:text-3xl lg:text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-primary mr-5">Discover More</button>
              <button className="btn btn-outline btn-warning hover:bg-yellow-500 hover:text-gray-900 transition duration-300">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      {/* Slide 4 */}
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full rounded-lg" />
        <div className="absolute flex h-full items-center rounded-xl left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          <div className="text-white space-y-7 pl-4 lg:pl-12 lg:w-1/2">
            <h2 className="text-base sm:text-3xl lg:text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-primary mr-5">Discover More</button>
              <button className="btn btn-outline btn-warning hover:bg-yellow-500 hover:text-gray-900 transition duration-300">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
