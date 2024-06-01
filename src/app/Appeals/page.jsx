import React from "react";
import Navbar from "../Components/Navbar";
import Scroll_to_top from "../Components/Scroll_to_top";
import Whatsapp from "../Components/Whatsapp";
import AppealsContent from "../Components/AppealsContent";
import Footer from "../Components/Footer";

const Appeals = () => {
  return (
    <div className="mh-screen">
      <Navbar />
      <Scroll_to_top />
      <Whatsapp />
      <div className="flex justify-center items-center relative">
        <div className="relative z-10">
          <p className="font-heading1 md:text-5xl text-3xl font-bold capitalize md:pt-20 pt-10 tracking-wider text-gray-800 leading-loose animate__animated animate__zoomIn animate__delay-1s">
            Appeals
          </p>
        </div>
      </div>

      <div>
        <div className="py-5">
          <div className="pt-5 pb-5">
            <AppealsContent />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Appeals;
