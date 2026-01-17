import React from "react";

import BackButton from "@/sharedComponents/backButton";

type Props = {};

function WarningAgainstInfidelity({}: Props) {
  return (
    <div className="font-inter my-24 space-y-6 md:my-32 mx-6 md:mx-32 ">
      <BackButton />

      <div className="flex flex-col gap-y-6 justify-center items-center h-full">
        <div className="text-b text-center md:w-2/3 z-20 w-full">
          <p className="font-bold uppercase text-xl md:text-5xl">
            Warnings Against Infidelity
          </p>
        </div>
        <div className="space-y-4 text-[#888888]">
          <p>Nov. 12th, 2025</p>
          <p>By Bro. Effiong Udoekong</p>
        </div>
        {/* <div className="">
          <Image
            alt="wisdom"
            src={proverbs2}
            height={300}
            width={100}
            className="h-[200px] max-w-full rounded-3xl object-cover"
          />{" "}
        </div> */}
        <div className="font-semibold">
          <em>Proverbs 5:1-22</em>
        </div>
      </div>

      <div className="text-[#000000] space-y-4">
        <div className="space-y-4 ">
          <p className="font-bold text-lg">A. Introduction</p>
          <p>
            Proverbs, a book of wisdom, is directed to a great extent to young
            persons, especially of the male gender. <br /> According to Proverbs
            1:4, Proverbs was given to give prudence to the simple and to the
            young man knowledge and discretion.
          </p>
          <p>
            One area where a young man needs wisdom and discretion is in his
            relationship with the opposite sex.
          </p>
          <p>
           Our text dwells on warnings to the young man whom the writer refers to as &quot;My son…&quot; 
          </p>
        </div>
        <div className="space-y-2">
          <p className="font-bold text-lg">B.Warnings Against Infidelity?</p>
          <p>
            • Give attention to wisdom, understanding and discretion. Note that
            some would reject wisdom, hate discretion, and make a mockery of
            understanding. See Prov. 1:22. Beware of such persons. They could
            bring you to their level.
          </p>
          <p>
            • Let your lips keep knowledge. Weigh your speech. Apply wisdom,
            discretion and understanding to your speech. Do not speak just
            because you know about the issue. Do not promise what you are not
            sure of. See Prov. 6:1-3
          </p>
          <p>
            • Beware of the flattery of the immoral woman. Her words are sweet
            as honey and smooth as oil. See Psalms 55:20-21, Prov. 7:21.
            Compared to sweet-tasting poison that causes great harm or death at
            the end. When the sweetness wears off they become bitter as
            wormwood.
          </p>
          <p>
            • Run from her. Do not associate with the immoral woman. Do not be
            attracted to her. You don&apos;t need to see her in person. It could
            be an online meeting. Do you know her intention? Do you know if the
            person is even a man or a woman? We hear more often about female
            victims of online friendships. Men also fall victim. If you follow
            her, she can lead you to your death.
          </p>
          <p>
            • Association with her can lead to loss of self-respect,
            indebtedness and blackmail. Prov 5: 9-10. You may not intentionally
            follow an immoral woman. Being at the wrong place at the wrong time
            can associate you with her. For instance, avoid lodging in a hotel
            that also accommodates prostitutes.{" "}
          </p>
          <p>
            {" "}
            • Association with them can lead to fathering children from numerous
            women. It&apos;s not a virtue. Prov 5:15. Be faithful to your wife
            just as you drink water from your own cistern. Be satisfied with
            your wife. Do not be like a stream from which anyone can fetch and
            drink.{" "}
          </p>

          <p>
            • Rejoice with the wife of your youth. Prov. 5: 18. Live happily
            with her. Enjoy being with her. God&apos;s plan for marriage is one
            man, one woman. Gen. 2:24. God is not pleased when you break the
            bonds of your marriage. See Mal. 2:14. Polygamy was never the plan
            of God in marriage, although God allowed it in the lives of some
            people.
          </p>
          <p>
            • God sees everything that you do in respect of your marriage. Mal.
            2: 14. He knows how you treat the wife of your youth. He counts even
            your steps - Job 14:16. He knows everything that we do - Psa. 119:
            168. His eyes watch everywhere and keep His eyes on both the good
            and the evil. Prov 15:3
          </p>
        </div>
        <div className="space-y-2">
          <p className="font-bold text-lg">Conclusion</p>
          <p>
            Enjoy life with the wife of your youth. Enjoy your marriage.
            Christian wives, do not be a reluctant partner in the marriage
            thereby giving the strange woman a foothold in your marriage. If you
            are unmarried, maintain your chastity. Wait for your turn with the
            right partner. God bless you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WarningAgainstInfidelity;
