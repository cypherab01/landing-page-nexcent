import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import OurClients from "@/components/OurClients";
import Community from "@/components/Community";
import LearnMore from "@/components/LearnMore";
import LocalBusiness from "@/components/LocalBusiness";
import Pana from "@/components/Pana";
export default function Home() {
  return (
    <>
      {/* main body container */}
      <div className="flex flex-col items-center justify-center w-screen hero bg-silver p-4 md:p-2 lg:p-0">
        <Header />
        <main className="container h-[calc(100vh-80px)]">
          <HeroBanner />
          <OurClients />
          <Community />
          <LearnMore />
          <LocalBusiness />
          <Pana />
          <div className="min-h-[40vh] relative"></div>
        </main>
      </div>
    </>
  );
}
