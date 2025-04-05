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
      <div className="bg-silver">
        <Header />
        <HeroBanner />
      </div>
      <div>
        <main className="container mx-auto">
          <div className="">
            <OurClients />
            <Community />
            <LearnMore />
            <LocalBusiness />
            <Pana />
          </div>
        </main>
      </div>
    </>
  );
}
