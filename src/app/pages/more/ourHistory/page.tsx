import Link from "next/link";

function TheChurch() {
  return (
    <main className="min-h-screen bg-[#f7f8f5] px-6 pb-20 pt-28 font-inter sm:px-10 lg:px-16">
      <article className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-[#e4c47d]/60 bg-white shadow-[0_12px_35px_rgba(25,49,35,0.06)]">
        <header className="bg-[#17261f] px-6 py-12 text-center text-white sm:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#e4c47d]">
            More about the church
          </p>
          <h1 className="mt-4 text-4xl font-bold uppercase sm:text-6xl">
            Our history
          </h1>
        </header>
        <div className="space-y-5 px-6 py-10 text-base leading-8 text-[#66716b] sm:px-12 sm:text-lg">
          <p>
            The Church of Christ has its roots in the early 19th century during
            the Second Great Awakening, a significant religious revival in the
            United States. This movement sought to restore the New Testament
            church and emphasized the need for unity among Christians, who held
            various doctrines and practices. Key figures in the formation of the
            Church of Christ included Alexander Campbell and Barton W. Stone,
            whose efforts eventually led to the establishment of a distinct
            religious body.
          </p>
          <p>
            Barton W. Stone, a Presbyterian minister, was one of the first to
            advocate for a unified Christian faith that transcended
            denominational boundaries. In 1804, he established a group known as
            the Cane Ridge Church in Kentucky, which became a focal point for
            the revival movement. Stone emphasized the importance of personal
            faith and the authority of the Bible, laying the groundwork for what
            would later become a central tenet of the Church of Christ.
          </p>
          <p>
            Around the same time, Alexander Campbell, a Scottish immigrant and
            preacher, began to promote a restorationist approach to
            Christianity. In 1827, he established the Mahoning Baptist
            Association in Pennsylvania, which aimed to promote unity among
            believers. Campbell&apos;s teachings focused on the necessity of
            baptism, the importance of the New Testament as the authoritative
            guide for faith and practice, and a rejection of creeds and human
            traditions that he felt had corrupted the original teachings of
            Christ.
          </p>
          <p>
            The merger of Stone&apos;s and Campbell&apos;s movements in the
            1830s marked a significant turning point in the evolution of the
            Church of Christ. The newly formed movement sought to restore the
            practices and beliefs of the early church as depicted in the New
            Testament. This included a commitment to the autonomy of local
            congregations, the centrality of the Bible in worship and teaching,
            and an acknowledgment of the Lord&apos;s Supper as a weekly
            practice. The movement attracted many followers who were
            disillusioned with the established denominations of their time.
          </p>
          <p>
            Through the 19th century, the Church of Christ grew rapidly in the
            United States. Its emphasis on individual responsibility to
            interpret scripture and its rejection of denominational labels
            resonated with many. Churches were established across the nation,
            and the movement expanded to include various branches, including the
            Disciples of Christ and the Churches of Christ.
          </p>
          <p>
            The early 20th century brought new challenges and changes to the
            Church of Christ. Debates over issues such as musical instruments in
            worship and the role of women in the church sparked divisions among
            congregations. This period saw the formalization of distinct
            congregations that aligned either with a more traditional or
            progressive understanding of church practices.
          </p>
          <p>
            The mid-20th century marked a period of notable growth for the
            Church of Christ, as congregations flourished in suburban areas and
            the movement embraced missionary efforts both domestically and
            internationally. The church&apos;s commitment to education led to
            the establishment of several Christian colleges and universities,
            which played a crucial role in training future church leaders.
          </p>
          <p>
            Today, the Church of Christ continues to uphold the belief that it
            is a restoration of the New Testament church. Its mission is to
            glorify God by fostering committed relationships with Jesus Christ
            within communities. While variations in practice and belief exist
            among congregations, the core principle remains a dedication to
            living out the teachings of Jesus through the guidance of the Holy
            Spirit, maintaining a central focus on scripture as the
            authoritative source of faith and practice. The Church of Christ
            represents a diverse yet united body of believers dedicated to
            proclaiming their faith and serving their communities in love and
            compassion.
          </p>
        </div>

        <div className="border-t border-[#e4c47d]/40 px-6 py-8 text-center sm:px-12">
          <Link
            href="/pages/aboutUs"
            className="inline-flex rounded-full bg-[#17261f] px-6 py-3 font-semibold text-white transition hover:bg-[#196f00]"
          >
            Explore about us
          </Link>
          <p className="mt-6 text-sm text-[#66716b]">
            © Copyright 2025 Church of Christ, Anua Obio. All Rights Reserved
          </p>
        </div>
      </article>
    </main>
  );
}

export default TheChurch;
