import { Facebook, WhatsApp } from "@mui/icons-material";
import { FacebookIcon } from "lucide-react";
import Image from "next/image";

const Footer = () => (
  <div className=" p-8 mt-20 flex flex-col justify-center items-center text-white bg-black">
    <div className="pt-12  flex flex-col justify-center items-center  space-y-6">
      <div className="rounded-full items-center">
        <Image
          src="/images/coclogo2.png"
          alt="logo"
          width={100}
          height={100}
          className=" h-[100px] w-[100px] rounded-full"
        />
      </div>

      <h3>Church of Christ, Anua Obio</h3>

      <em>...all the Churches of Christ salute you (Romans 16:16)</em>
    </div>

    <div className="pt-12">
      <p>© Copyright 2021 Church of Christ, Anua Obio. All Rights Reserved</p>
    </div>
  </div>
);

export default Footer;
