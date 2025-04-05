import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import OurClients from "@/components/OurClients";

export default function Home() {
  return (
    <div className="">
      {/* main body container */}
      <div className="flex flex-col items-center justify-center w-screen hero bg-silver">
        <Header />
        <main className="container min-h-[calc(100vh-60px)] md:h-[calc(100vh-80px)]">
          <HeroBanner />
          <OurClients />
        </main>
      </div>
    </div>
  );
}
