import React from "react";
import Img from "../../../../../public/images/marriage.jpg"
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";
import { Button } from "@mui/material";
import BackButton from "@/sharedComponents/backButton";


type Props = {};

function Marriage({}: Props) {
  return (
    <div className="font-inter my-24 space-y-6 md:my-32 mx-6 md:mx-32 ">
   
<BackButton/>
     <div className="flex flex-col gap-y-6 justify-center items-center h-full">
        <div className="text-b text-center md:w-2/3 z-20 w-full">
          <p className="font-bold uppercase text-xl md:text-5xl">
          Malachi&apos;s Teaching on Marriage and Divorce          </p>
        </div>
        <div className="space-y-4 text-[#888888]">
          <p>Jan. 10, 2025</p>
          <p>By Bro. Offiong</p>
        </div>
        <div className="">
          <Image
            alt="Marriage"
            src={Img}
            height={300}
            width={100}
            className="h-[200px] w-screen max-w-full rounded-3xl object-cover"
          />{" "}
        </div>
        <div className="font-semibold">
          <em>Malachi 2:14-16.</em>
        </div>
      </div>


      <div className="text-[#000000] space-y-4">
        <div className="space-y-2 ">
          <p className="font-bold text-lg">A. Introduction</p>
          <p>
            • ...Yet you say, for what reason? Because the Lord has been a
            witness between you and the wife of your youth, against whom you
            have dealt treacherously, though she is your companion and your wife
            by covenant. But not one has done so who has a remnant of the
            Spirit. And what did that one do while he was seeking a godly
            offspring? Take heed then, to your spirit, and let no one deal
            treacherously against the wife of your youth.{" "}
          </p>

          <p>
            • For I hate divorce, says the Lord, the God of Israel, and him who
            covers his garment wrong, says the Lord of hosts. So take heed to
            your spirit, that you do not deal treacherously...
          </p>
        </div>
        <div className="space-y-2">
          <p className="font-bold text-lg">B. HOME SWEET HOME</p>
          <ul>
            <li>
              • The word home conjures up ideas of the most pleasant sort, rest,
              security, safety, unconditional love, and full acceptance.{" "}
            </li>
            <li>• The importance of one&apos;s home is universally admitted.</li>
            <li>
              • From famed agnostic to devout Christian, all emphatically concur
              in the home&apos;s importance and its connection to society&apos;s welfare
              and one&apos;s well-being.
            </li>
            <li> HOME is brought about by marriage</li>
          </ul>
        </div>
        <div className="space-y-2">
          <p className="font-bold text-lg">C. WHEN SIN INVADES THE HOME</p>
          <ul>
            <li>
              • It destroys the God-given beauty. Such happened in Israel and
              was the basis for the words of Malachi 2:14-16.
            </li>
            <li>• Israel was carelessly destroying the beauty of God&apos;s home</li>
            <li>
              • With subtle moves, Israel had modified God&apos;s home and their
              redesign fell far short of divine approval!
            </li>
            <li>
              {" "}
              • Instead of joy and security, the homes of the Malachi era
              brought shame and sorrow.
            </li>
            <li> • God&apos;s prophet was sent to correct this tragedy. </li>
            <li>
              • From Malachi&apos;s words, we can find a great lesson regarding the
              home&apos;s holiness{" "}
            </li>
          </ul>
        </div>

        <div className="space-y-2 ">
          <p className="font-bold text-lg"> CONCLUSION </p>
          <ul>
            <li>
              {" "}
              • Occasionally, you hear families discussing the inevitability of
              death. Often the conversation turns to what certain persons are to
              inherit.{" "}
            </li>

            <li>
              • The greatest inheritance a parent can give a child is a holy
              home! The most cherished item you can will to another upon your
              death is the precious memory of a holy home!
            </li>

            <li>
              • Malachi spoke to families whose homes were being destroyed. The
              prophet tried to correct the damage by calling the nation to
              incorporate these four hallmarks of a holy home.
            </li>
            <li>• His call is appropriate to families today. </li>
            <li>
              • May all possess these hallmarks of a holy home in Jesus Christ&apos;s
              Name!
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Marriage;
