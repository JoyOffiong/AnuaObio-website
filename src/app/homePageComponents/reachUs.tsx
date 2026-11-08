import { ArrowUpRight, Facebook, Mail, Phone } from "lucide-react";

function ReachOut() {
  const contactOptions = [
    {
      icon: Phone,
      eyebrow: "Call us",
      title: "We would love to hear from you",
      detail: "0706 233 0549 · 0803 338 0401",
      action: "Call the church",
      href: "tel:+2347062330549",
      accent: "bg-[#e7f2eb] text-[#196f00]",
    },
    {
      icon: Mail,
      eyebrow: "Write to us",
      title: "Send us a message",
      detail: "cocanuaobio@gmail.com",
      action: "Send an email",
      href: "mailto:cocanuaobio@gmail.com",
      accent: "bg-[#f8efdc] text-[#9a6b16]",
    },
    {
      icon: Facebook,
      eyebrow: "Connect with us",
      title: "Follow our community",
      detail: "Church of Christ, Anua Obio, Uyo",
      action: "Follow on Facebook",
      href: "https://web.facebook.com/profile.php?id=61566486071827",
      accent: "bg-[#e8edf7] text-[#31559a]",
    },
  ];

  return (
    <section className="my-20 bg-[#f7f8f5] px-6 py-16 sm:px-10 lg:my-28 lg:px-16">
      <div className="mx-auto max-w-7xl">
       
        <div className="grid gap-5 lg:grid-cols-3">
          {contactOptions.map(
            ({ icon: Icon, eyebrow, title, detail, action, href, accent }) => (
              <a
                key={eyebrow}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group rounded-2xl border border-[#e4e9e3] bg-white p-6 shadow-[0_12px_35px_rgba(25,49,35,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(25,49,35,0.12)] focus:outline-none focus:ring-2 focus:ring-[#4ca233] focus:ring-offset-2"
              >
                <div className="flex items-start justify-between gap-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${accent}`}
                  >
                    <Icon size={22} />
                  </div>
                  <ArrowUpRight
                    size={21}
                    className="text-[#9ca8a0] transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#196f00]"
                  />
                </div>
                <p className="mt-7 text-xs font-bold uppercase tracking-[0.16em] text-[#7b877f]">
                  {eyebrow}
                </p>
                <h3 className="mt-2 text-xl font-bold text-[#17261f]">
                  {title}
                </h3>
                <p className="mt-3 min-h-12 text-sm leading-6 text-[#66716b]">
                  {detail}
                </p>
                <p className="mt-5 font-semibold text-[#196f00]">{action}</p>
              </a>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

export default ReachOut;
