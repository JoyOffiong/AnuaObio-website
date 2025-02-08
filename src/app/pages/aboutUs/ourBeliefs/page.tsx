import React from 'react'

function OurBeliefs() {

const TheGodHead = [
 { entity:"God", details:"Our faith rests on the truth of a singular Divine Being omnipotent, omnipresent, and omniscient, who eternally exists as the Triune Godhead; the Father, the Son, and the Holy Spirit. He is the Architect, Guardian, and Sovereign of all creation", texts:"Hebrews 4:12, John 16:5-16,Genesis 1:1-2, Genesis 1:26-27,  John 3:16" },
 { entity:"Jesus Christ", details:"We believe Jesus Christ is both God and fully human, the Son of God. He was born of a virgin, lived a sinless life, performed miracles, died as the ultimate sacrifice for our sins, and rose three days later, demonstrating His power over sin and death. He ascended to heaven and will return for judgment.", texts:"2 Corinthians 5:21,  1 Corinthians 15:3-5,  Ephesians 2:8-9, Hebrews 7:24-27, John 10:7-10, Ephesians 1:22-23" },
 { entity:"The Holy Spirit", details:"We believe in the divinity of the Holy Spirit, who reminds us of our need for Jesus Christ. The Holy Spirit indwells Christians, providing power, understanding of spiritual truth, and guidance for good. He also grants each believer a spiritual gift to advance God's kingdom.", texts:"Ephesians 1:13-21, Galatians 5:22-23" },
 { entity:"The Bible", details:"We hold that the Bible is God’s inerrant Word and the ultimate truth for Christian faith and practice. Written by human authors under the Holy Spirit's guidance, it is useful for teaching, correcting, and training in righteousness, equipping believers for good works.", texts:"2 Timothy 3: 16-17, Psalm 119:9-11" },
 { entity:"The Church", details:"We hold that the Bible is God’s inerrant Word and the ultimate truth for Christian faith and practice. Written by human authors under the Holy Spirit's guidance, it is useful for teaching, correcting, and training in righteousness, equipping believers for good works.", texts:"Colossians 1:18" },

 {entity:"Our Salvation", details:"Salvation is a gift from God, received by grace through faith. Faith without work is death, and we cannot earn salvation through self-improvement or good deeds. Accepting Jesus Christ grants forgiveness from sin’s penalty. Water baptism is an essential part of becoming a Christian, symbolizing the death, burial, and new life gained through the washing away of sins.", texts:"Acts 17:30, Acts 8:37, Acts 22:16, John 12:26, Mark 12:30, 2 Corinthians 5:18-20, 1 Peter 4:10-11, Acts 2:42-47" },
 {entity:"The Resurrection", details:"We believe in the resurrection of both saved and lost souls. We will either exist eternally alienated from God by sin, or eternally united with God through forgiveness and salvation. Being separated for eternity is hell. Being forever united with God is synonymous with eternal life. Heaven and Hell are actual realms of eternal life."}
]


  return (
    <div className=' my-24 font-inter'>
      <div className=' space-y-6 px-4 py-8 md:px-32'>
      {
        TheGodHead.map((GH)=>{
          const {entity, texts, details} = GH

        return(
          <>
          <div className='flex flex-col mx-auto w-10/12 md:flex-row  items-center md:gap-24 gap-2'>
          <div className='w-full md:w-1/3'>
          <p className='text-3xl md:text-4xl font-bold text-[#333333]'>{entity}</p>

          </div>
            <div className='leading-8 font-medium  w-full md:w-2/3'>
                <p className='text-[#666666] text-xl pb-6 md:text-2xl leading-normal'>{details}</p>
                <em className='text-black text-xl md:text-2xl '>{texts}</em>
            </div>
      </div>
      <div>
        <hr />
      </div>
          </>

        )
        })
      }
      
      </div>
      </div>
  )
}

export default OurBeliefs

