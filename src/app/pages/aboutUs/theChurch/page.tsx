import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import React from 'react'

function TheChurch() {
  return (
    <div className='m-12 my-24'>
      <div className='mx-auto w-10/12 space-y-6 shadow-lg p-8'>
            <div>
            <p className="font-bold text-3xl md:text-5xl mb-14 text-center">Our History</p>
            </div>
            <div className='text-[#666666] font-medium text-base space-y-4'>
                <p>The Church of Christ has its roots in the early 19th century during the Second Great Awakening, a significant religious revival in the United States. This movement sought to restore the New Testament church and emphasized the need for unity among Christians, who held various doctrines and practices. Key figures in the formation of the Church of Christ included Alexander Campbell and Barton W. Stone, whose efforts eventually led to the establishment of a distinct religious body.</p>
                <p>Barton W. Stone, a Presbyterian minister, was one of the first to advocate for a unified Christian faith that transcended denominational boundaries. In 1804, he established a group known as the Cane Ridge Church in Kentucky, which became a focal point for the revival movement. Stone emphasized the importance of personal faith and the authority of the Bible, laying the groundwork for what would later become a central tenet of the Church of Christ.</p>
                <p>Around the same time, Alexander Campbell, a Scottish immigrant and preacher, began to promote a restorationist approach to Christianity. In 1827, he established the Mahoning Baptist Association in Pennsylvania, which aimed to promote unity among believers. Campbell&apos;s teachings focused on the necessity of baptism, the importance of the New Testament as the authoritative guide for faith and practice, and a rejection of creeds and human traditions that he felt had corrupted the original teachings of Christ.</p>
                <p>The merger of Stone&apos;s and Campbell&apos;s movements in the 1830s marked a significant turning point in the evolution of the Church of Christ. The newly formed movement sought to restore the practices and beliefs of the early church as depicted in the New Testament. This included a commitment to the autonomy of local congregations, the centrality of the Bible in worship and teaching, and an acknowledgment of the Lord&apos;s Supper as a weekly practice. The movement attracted many followers who were disillusioned with the established denominations of their time.</p>
                <p>Through the 19th century, the Church of Christ grew rapidly in the United States. Its emphasis on individual responsibility to interpret scripture and its rejection of denominational labels resonated with many. Churches were established across the nation, and the movement expanded to include various branches, including the Disciples of Christ and the Churches of Christ.</p>
                <p>The early 20th century brought new challenges and changes to the Church of Christ. Debates over issues such as musical instruments in worship and the role of women in the church sparked divisions among congregations. This period saw the formalization of distinct congregations that aligned either with a more traditional or progressive understanding of church practices.</p>
                <p>The mid-20th century marked a period of notable growth for the Church of Christ, as congregations flourished in suburban areas and the movement embraced missionary efforts both domestically and internationally. The church&apos;s commitment to education led to the establishment of several Christian colleges and universities, which played a crucial role in training future church leaders.</p>
                <p>Today, the Church of Christ continues to uphold the belief that it is a restoration of the New Testament church. Its mission is to glorify God by fostering committed relationships with Jesus Christ within communities. While variations in practice and belief exist among congregations, the core principle remains a dedication to living out the teachings of Jesus through the guidance of the Holy Spirit, maintaining a central focus on scripture as the authoritative source of faith and practice. The Church of Christ represents a diverse yet united body of believers dedicated to proclaiming their faith and serving their communities in love and compassion.</p>
            </div>
            <div className='flex items-center gap-2 w-1/3 mx-auto'>


                    <div className='rounded-full h-8 w-8 flex justify-center items-center bg-[#f3f3f3]'>
                    <Twitter size={15}/>
                    </div>
                      <div className='rounded-full h-8 w-8 flex justify-center items-center bg-[#f3f3f3]'>
                    <Instagram size={15} />
                    </div>
                    <div className='rounded-full h-8 w-8 flex justify-center items-center bg-[#f3f3f3]'>
                    <Facebook size={15}/>
                    </div>
                    <div className='rounded-full h-8 w-8 flex justify-center items-center bg-[#f3f3f3]'>
                    <Linkedin size={15}/>
                    </div>
                     <div >
                    <button className="font-medium flex items-center text-white bg-black gap-2 rounded-lg px-3 py-2 transform hover:scale-110 hover:bg-green-900 transition-all duration-300 hover:text-white  "> 
                    <a href="">About Us</a> </button>
                    </div>
                  
                <div>
               
   
                </div>
            </div>
      </div>
    </div>
  )
}

export default TheChurch
