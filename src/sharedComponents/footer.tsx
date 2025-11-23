import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Image from "next/image";

const Footer = () => (
  <div className=" p-12 mt-20 flex flex-col space-y-6 justify-center items-center text-white bg-[#222222]">
    <div className="pt-12  flex flex-col justify-center items-center  space-y-6">
      <div className="items-center">
        <Image src="/images/coc.png" alt="logo" width={100} height={100} />
      </div>

      <div className="text-center">
        <h3>Church of Christ, Anua Obio</h3>
        <p> No. 18 Thomas Udoekong, Anua Obio, Uyo, Akwa Ibom State</p>
      </div>

      <em>...all the Churches of Christ salute you (Romans 16:16)</em>
    </div>

    <div className="flex gap-6">
      <a
        href="https://www.youtube.com/@cocanuaobiotv"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        <FaYoutube size={64} />
      </a>
      <a href="https://www.facebook.com/churchofchristanuaobio" target="_blank">
        <FaFacebookSquare size={64} />
      </a>
    </div>

    <div className="pt-12">
      <p>© Copyright 2021 Church of Christ, Anua Obio. All Rights Reserved</p>
    </div>
  </div>
);

export default Footer;
