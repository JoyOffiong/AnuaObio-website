import React from "react";

import BackButton from "@/sharedComponents/backButton";

type Props = {};

function WarningAgainstInfidelity({}: Props) {
  return (
    <div className="mx-auto max-w-5xl px-6 pb-20 pt-28 font-inter sm:px-10 lg:px-16">
      <BackButton />

      <header className="mt-8 border-b border-[#e4c47d]/50 pb-10 text-center space-y-2">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4ca233]">
          Bible teaching
        </p>
      
          <p className="text-3xl text-center font-bold uppercase leading-tight text-[#17261f] md:text-5xl">
            Warnings Against Infidelity
          </p>
       
        <div className="space-y-2 text-sm text-[#66716b]">
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
        <div className="font-semibold italic text-[#196f00]">
          <em>Proverbs 5:1-22</em>
        </div>
      </header>

      <article className="mt-12 rounded-3xl border border-[#e1e8e1] bg-white p-6 text-[#303b35] shadow-[0_12px_35px_rgba(25,49,35,0.06)] sm:p-10">
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
      </article>
    </div>
  );
}

export default WarningAgainstInfidelity;
