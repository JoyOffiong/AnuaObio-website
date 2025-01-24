import React from "react";

type Props = {};

function Marriage({}: Props) {
  return (
    <div className="font-sans ">
      <div
        className="bg-cover bg-center relative z-10 font-sans"
        style={{
          backgroundImage: "url('/images/marriage8.jpg')",
          height: "400px",
        }}
      >
        <div className="absolute inset-0  opacity-30"></div>
        <div className="flex justify-center items-center h-full">
          <div className="text-white text-center z-20">
            <p className="font-semibold text-3xl md:text-5xl">
              MALACHI’S TEACHING ON MARRIAGE AND DIVORCE
            </p>
          </div>
        </div>
      </div>

      <div className="text-[#174124] space-y-4 p-12">
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
            <li>• The importance of one’s home is universally admitted.</li>
            <li>
              • From famed agnostic to devout Christian, all emphatically concur
              in the home’s importance and its connection to society’s welfare
              and one’s well-being.
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
            <li>• Israel was carelessly destroying the beauty of God’s home</li>
            <li>
              • With subtle moves, Israel had modified God’s home and their
              redesign fell far short of divine approval!
            </li>
            <li>
              {" "}
              • Instead of joy and security, the homes of the Malachi era
              brought shame and sorrow.
            </li>
            <li> • God’s prophet was sent to correct this tragedy. </li>
            <li>
              • From Malachi’s words, we can find a great lesson regarding the
              home’s holiness{" "}
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
              • May all possess these hallmarks of a holy home in Jesus Christ’s
              Name!
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Marriage;
