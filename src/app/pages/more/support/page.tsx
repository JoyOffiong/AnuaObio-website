import { Heart, Landmark } from "lucide-react";

function Support() {
  return (
    <main className="min-h-screen bg-[#f7f8f5] px-6 pb-20 pt-28 font-inter sm:px-10 lg:px-16">
      <section className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-[#e4c47d]/60 bg-white shadow-[0_12px_35px_rgba(25,49,35,0.06)]">
        <div className="bg-[#17261f] px-6 py-12 text-center text-white sm:px-12">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#e4c47d] text-[#17261f]">
            <Heart size={25} fill="currentColor" />
          </div>
        
          <h1 className="mt-3 text-4xl font-bold sm:text-4xl">To Support the Congregation</h1>
        </div>
        <div className="space-y-8 px-6 py-10 sm:px-12">
          <p className="text-center leading-8 text-[#66716b]">
            Calvary greetings to you in the name of our Lord and Saviour, Jesus
            Christ. We invite you to support our church community. Your generous
            contributions help enhance our programmes and worship facilities,
            creating a vibrant space for all.
          </p>
          
          <div className="rounded-2xl border border-[#e4c47d] bg-[#fffaf0] p-6 text-center">
            <Landmark className="mx-auto text-[#d0a94f]" size={28} />
            <h2 className="mt-4 text-xl font-bold text-[#17261f]">
              Church account details
            </h2>
            <p className="mt-4 leading-8 text-[#66716b]">
              <strong>Account name:</strong> Church of Christ Uyo
              <br />
              <strong>Account number:</strong> 0146796011
              <br />
              <strong>Bank:</strong> FCMB
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Support;
