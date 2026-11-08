const beliefs = [
  {
    entity: "God",
    details:
      "Our faith rests on the truth of a singular Divine Being—omnipotent, omnipresent, and omniscient—who eternally exists as the Triune Godhead: the Father, the Son, and the Holy Spirit. He is the Architect, Guardian, and Sovereign of all creation.",
    texts: "Hebrews 4:12; John 16:5-16; Genesis 1:1-2, 26-27; John 3:16",
  },
  {
    entity: "Jesus Christ",
    details:
      "We believe Jesus Christ is both God and fully human, the Son of God. He was born of a virgin, lived a sinless life, performed miracles, died as the ultimate sacrifice for our sins, rose three days later, ascended to heaven, and will return for judgment.",
    texts:
      "2 Corinthians 5:21; 1 Corinthians 15:3-5; Hebrews 7:24-27; John 10:7-10",
  },
  {
    entity: "The Holy Spirit",
    details:
      "We believe in the divinity of the Holy Spirit, who reminds us of our need for Jesus Christ. The Holy Spirit indwells Christians, providing power, understanding of spiritual truth, guidance for good, and spiritual gifts to advance God&apos;s kingdom.",
    texts: "Ephesians 1:13-21; Galatians 5:22-23",
  },
  {
    entity: "The Bible",
    details:
      "We hold that the Bible is God&apos;s inerrant Word and the ultimate truth for Christian faith and practice. Written by human authors under the Holy Spirit&apos;s guidance, it teaches, corrects, and trains believers for good works.",
    texts: "2 Timothy 3:16-17; Psalm 119:9-11",
  },
  {
    entity: "The Church",
    details:
      "We believe the church belongs to Christ, who is its head. It is the family of believers called to worship God, grow in truth, serve one another, and share the hope of the gospel.",
    texts: "Colossians 1:18",
  },
  {
    entity: "Our Salvation",
    details:
      "Salvation is a gift from God, received by grace through faith. Water baptism is an essential part of becoming a Christian, symbolizing the death, burial, and new life gained through the washing away of sins.",
    texts:
      "Acts 17:30; Acts 8:37; Acts 22:16; 2 Corinthians 5:18-20; Acts 2:42-47",
  },
  {
    entity: "The Resurrection",
    details:
      "We believe in the resurrection of both saved and lost souls. We will either exist eternally alienated from God by sin, or eternally united with God through forgiveness and salvation.",
    texts: "John 5:28-29; 1 Corinthians 15:20-22",
  },
];

function OurBeliefs() {
  return (
    <main className="min-h-screen bg-[#f7f8f5] pb-20 font-inter">
      <header className="px-6 pb-12 pt-28 text-center sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl border-b border-[#e4c47d]/50 pb-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4ca233]">
            About The church
          </p>
          <h1 className="mt-4 text-4xl font-bold uppercase leading-tight tracking-tight text-[#17261f] sm:text-6xl">
            Our beliefs
          </h1>
        
        </div>
      </header>

      <section className="mx-auto max-w-5xl space-y-5 px-6 sm:px-10 lg:px-16">
        {beliefs.map(({ entity, details, texts }, index) => (
          <article
            key={entity}
            className="grid gap-5 rounded-3xl border border-[#e4c47d]/50 bg-white p-6 shadow-[0_12px_35px_rgba(25,49,35,0.06)] sm:p-8 md:grid-cols-[0.32fr_0.68fr] md:gap-10"
          >
            <div>
              <span className="text-sm font-bold text-[#d0a94f]">
                0{index + 1}
              </span>
              <h2 className="mt-2 text-2xl font-bold text-[#17261f] sm:text-3xl">
                {entity}
              </h2>
            </div>
            <div>
              <p className="text-base leading-8 text-[#4d5b52]">{details}</p>
              <p className="mt-5 border-l-4 border-[#e4c47d] pl-4 text-sm font-semibold italic leading-6 text-[#196f00]">
                {texts}
              </p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default OurBeliefs;
